import React from 'react';
import { Attr, Note, NoteAttr, NoteTag, Notu, Tag } from 'notu';
import { useState } from 'react';
import { NoteTagBadge } from './NoteTagBadge';
import 'bulma';
import { NoteAttrEditor } from './NoteAttrEditor';
import { useManualRefresh } from './Hooks';
import { getTextColorClass } from './helpers/ColorHelpers';
import { NoteTagDataComponentFactory } from './notetagdata/NoteTagDataComponentFactory';

interface NoteEditorProps {
    /** Used for saving the note once changes have been confirmed */
    notu: Notu,
    /** The note to be edited */
    note: Note,
    /** The collection of tags that can be added to the note */
    tags: Array<Tag>,
    /** The collection of attrs that can be added to the note */
    attrs: Array<Attr>,
    /** Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the note editor */
    onConfirm: (note: Note) => Promise<boolean>,
    /** Called when the cancel button is clicked */
    onCancel: (note: Note) => void,
    /** Called when onConfirm has indicated that the NoteEditor should proceed with the save automatically, and the save has gone through successfully */
    onSave: (note: Note) => void,
    /** Used for looking up NoteTagDataComponentFactory */
    noteTagDataComponentResolver: (tag: Tag) => NoteTagDataComponentFactory
}


export const NoteEditor = ({
    notu,
    note,
    tags,
    attrs,
    onConfirm,
    onCancel,
    onSave,
    noteTagDataComponentResolver
}: NoteEditorProps) => {
    if (!note.space)
        return (<p>Note must define the space that it belongs to</p>);

    const date = `${note.date.getFullYear()}-${(note.date.getMonth() + 1).toString().padStart(2, '0')}-${note.date.getDate().toString().padStart(2, '0')}`;
    const time = `${note.date.getHours().toString().padStart(2, '0')}:${note.date.getMinutes().toString().padStart(2, '0')}`;

    const [ownTagName, setOwnTagName] = useState(note.ownTag?.name ?? '');
    const [showAttrsForTag, setShowAttrsForTag] = useState<Tag>(null);
    const [error, setError] = useState(null);
    const manualRefresh = useManualRefresh();

    async function submitNote(evt): Promise<void> {
        evt.preventDefault();
        note.date = new Date(`${evt.target.elements.date.value} ${evt.target.elements.time.value}`);
        note.text = evt.target.elements.text.value;
        try {
            const confirmResult = await onConfirm(note);
            if (!!confirmResult) {
                await notu.saveNotes([note]);
                try { onSave(note); } catch (err) { }
            }
            setError(null);
        }
        catch (err) {
            setError(err.message);
        }
    }

    function onOwnTagNameChange(event): void {
        setOwnTagName(event.target.value);
        if (event.target.value.length == 0)
            note.removeOwnTag();
        else
            note.setOwnTag(event.target.value);
    }

    function onTagSelected(event): void {
        const tagId = event.target.value;
        const tag = tagsThatCanBeAdded().find(x => x.id == tagId);
        if (!tag)
            return;
        note.addTag(tag);
        manualRefresh();
    }

    function onTagToShowAttrsForSelected(event): void {
        const tagId = event.target.value;
        const tag = note.tags.find(x => x.tag.id == tagId)?.tag;
        setShowAttrsForTag(tag);
    }

    function noteAttrsToDisplay(): Array<NoteAttr> {
        if (!!showAttrsForTag)
            return note.getTag(showAttrsForTag).attrs;
        return note.attrs;
    }

    function tagsThatCanBeAdded(): Array<Tag> {
        return tags.filter(x => (x.isPublic || x.space.id == note.space.id) && !note.tags.find(y => x.id == y.tag.id));
    }

    function removeTag(tag: Tag): void {
        note.removeTag(tag);
        if (tag == showAttrsForTag)
            setShowAttrsForTag(null);
        manualRefresh();
    }

    function attrsThatCanBeAdded(): Array<Attr> {
        let result = attrs.filter(x => x.space.id == note.space.id);
        if (!!showAttrsForTag) {
            const nt = note.getTag(showAttrsForTag);
            result = result.filter(x => !nt.getAttr(x));
        }
        else
            result = result.filter(x => !note.getAttr(x));
        return result;
    }

    function removeAttr(noteAttr: NoteAttr): void {
        if (!!showAttrsForTag)
            note.getTag(showAttrsForTag).removeAttr(noteAttr.attr);
        else
            note.removeAttr(noteAttr.attr);
        manualRefresh();
    }

    function onAttrSelected(event): void {
        const attrId = event.target.value;
        const attr = attrsThatCanBeAdded().find(x => x.id == attrId);
        if (!attr)
            return;
        if (!!showAttrsForTag)
            note.getTag(showAttrsForTag)?.addAttr(attr);
        else
            note.addAttr(attr);
        event.target.value = null;
        manualRefresh();
    }

    function onCancelClick() {
        onCancel(note);
    }

    function onOwnTagColorChange(event): void {
        const newColor = event.target.value as string;
        note.ownTag.color = newColor;
        manualRefresh();
    }

    function onCopyOtherTagColor(event): void {
        const otherTagId = Number(event.target.value);
        const otherTag = tags.find(x => x.id == otherTagId);
        if (!otherTag)
            return;
        note.ownTag.color = otherTag.color;
        manualRefresh();
    }

    function toggleOwnTagPublic(): void {
        note.ownTag.isPublic = !note.ownTag.isPublic;
        manualRefresh();
    }

    function renderErrorMessage() {
        if (!error)
            return;
        return (
            <div className="notification is-danger">
                <label>Error: {error}</label>
            </div>
        )
    }

    function renderTagsDropdown(tagSource: Array<Tag>, onChangeCallback: (any) => void) {
        if (tagSource.length == 0)
            return;

        tagSource = tagSource.sort((a, b) => {
            if (a.space == note.space && b.space != note.space)
                return -1;
            if (b.space == note.space && a.space != note.space)
                return 1;
            if (a.space == b.space)
                return a.name.localeCompare(b.name);
            return a.space.name.localeCompare(b.space.name);
        });

        return (
            <div className="control is-inline-block">
                <div className="select">
                    <select onChange={onChangeCallback}>
                        <option key="0" value={null}></option>
                        {tagSource
                            .map(x => (<option key={x.id} value={x.id}>{x.getQualifiedName(note.space.id)}</option>))}
                    </select>
                </div>
            </div>
        );
    }

    function renderTags() {
        if (note.tags.length == 0)
            return;

        return (
            <div className="box">
                <div>
                    {note.tags.map(x => (
                        <NoteTagBadge key={x.tag.id} noteTag={x}
                                      contextSpaceId={note.space.id}
                                      onDelete={() => removeTag(x.tag)}
                                      showAttrs={true}
                                      noteTagDataComponentResolver={t => null}/>
                    ))}
                </div>
            </div>
        );
    }

    function renderAttrsDropdown() {
        const attrs = attrsThatCanBeAdded().sort((a, b) => a.name.localeCompare(b.name));

        return (
            <div className="field has-addons">
                {renderTagsDropdown(note.tags.map(x => x.tag), onTagToShowAttrsForSelected)}
                <div className="control">
                    <div className="select">
                        <select onChange={onAttrSelected}>
                            <option key="0" value={null}></option>
                            {attrs.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    function renderAttrFields() {
        let noteAttrs = noteAttrsToDisplay();
        if (noteAttrs.length == 0)
            return;
        
        return (
            <div className="box">
                {noteAttrs.map((noteAttr, index) => (
                    <NoteAttrEditor key={index} noteAttr={noteAttr} onRemove={removeAttr} onChanged={manualRefresh}/>
                ))}
            </div>
        );
    }

    function renderOwnTagFields() {
        if (!note.ownTag)
            return;

        return [
            (<div className="control" key="1" style={{minWidth:'70px'}}>
                <input type="color" className="input" value={note.ownTag.color ?? '#969DA3'}
                    onChange={onOwnTagColorChange} style={{boxShadow:'none', borderRight:0}}/>
            </div>),
            renderOwnTagColorDropdown(),
            (<div className="control" key="3">
                <button type="button" className="button" onClick={toggleOwnTagPublic}>{note.ownTag.isPublic ? 'Public' : 'Private'}</button>
            </div>)
        ];
    }

    function renderOwnTagColorDropdown() {
        const tagsWithColor = tags.filter(x => !!x.color).sort((a, b) => a.name.localeCompare(b.name));
        if (tagsWithColor.length == 0)
            return;

        return (
            <div className="control" key="2">
                <div className="select">
                    <select onChange={onCopyOtherTagColor} style={{width:0, paddingRight:'2em', borderLeftWidth:0}}>
                        <option key="0" value={null}></option>
                        {tagsWithColor.map(x => (
                            <option key={x.id} value={x.id} style={{background:x.color}} className={getTextColorClass(x.color)}>
                                {x.getQualifiedName(note.space.id)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }

    function renderNoteTagData(noteTag: NoteTag) {
        const dataComponent = noteTagDataComponentResolver(noteTag.tag);
        if (!dataComponent)
            return;
        if (!noteTag.data)
            noteTag.data = {};

        return (<div key={noteTag.tag.id}>
            <label className="label">{noteTag.tag.getQualifiedName(note.space.id)}</label>
            <div className="box mb-3">{dataComponent.getEditorComponent(noteTag)}</div>
        </div>);
    }

    return (
        <form onSubmit={submitNote}>
            <fieldset>
                {renderErrorMessage()}

                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <div className="field has-addons">
                            <p className="control">
                                <input type="date" className="input" name="date" defaultValue={date}></input>
                            </p>
                            <p className="control">
                                <input type="time" className="input" name="time" defaultValue={time}></input>
                            </p>
                        </div>
                    </div>
                </div>

                <label className="label">Own Tag</label>
                <div className={`field ${!!note.ownTag ? 'has-addons' : ''}`}>
                    <div className="control is-expanded">
                        <input type="text" className="input" value={ownTagName} onChange={onOwnTagNameChange}></input>
                    </div>
                    {renderOwnTagFields()}
                </div>

                <div className="field">
                    <label className="label">Text</label>
                    <div className="control">
                        <textarea defaultValue={note.text} name="text" className="textarea"/>
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">Tags</label>
                    {renderTagsDropdown(tagsThatCanBeAdded(), onTagSelected)}
                </div>

                {renderTags()}

                <div className="field">
                    <label className="label">Attrs</label>
                    {renderAttrsDropdown()}
                </div>

                {renderAttrFields()}

                {note.tags.map(nt => renderNoteTagData(nt))}

                <div className="field">
                    <button type="submit" className="button is-link mr-3">Confirm</button>
                    <button type="button" className="button is-danger" onClick={onCancelClick}>Cancel</button>
                </div>
            </fieldset>
        </form>
    );
};