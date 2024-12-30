import { expect, test } from 'vitest';
import { DefaultTextProcessor, NoteText, NoteTextProcessor } from '../../src/notecomponents/NoteText';
import { NoteChecklist, NoteChecklistProcessor } from '../../src/notecomponents/NoteChecklist';
import { newNote } from '../../src/stories/StoryHelpers';
import { MockHttpClient } from '../../src/helpers/MockHttpClient';
import { splitNoteTextIntoComponents } from 'notu';
import { NoteComponent } from 'notu/dist/types/notecomponents/NoteComponent';
import { NoteParagraph } from '../../src';


test('splitNoteIntoComponents returns correct component array', () => {
    const componentProcessors = [
        new NoteTextProcessor(),
        new NoteChecklistProcessor()
    ];
    const defaultProcessor = new DefaultTextProcessor();
    const note = newNote('Hello, I like to swim\n\n<Checklist>\n- Do front crawl\n- Do breast stroke\n</Checklist>Fun fun fun');
    const notu = new MockHttpClient() as any;

    const result = splitNoteTextIntoComponents(note, notu, componentProcessors, defaultProcessor, (components: Array<NoteComponent>) => new NoteParagraph(components));

    expect(result.length).toBe(3);
    expect(result[0]).toBeInstanceOf(NoteText);
    expect(result[1]).toBeInstanceOf(NoteChecklist);
    expect(result[2]).toBeInstanceOf(NoteText);
    expect((result[0] as NoteText).originalText).toBe('Hello, I like to swim\n\n');
    expect((result[1] as NoteChecklist).lines).toEqual(['- Do front crawl', '- Do breast stroke']);
    expect((result[2] as NoteText).originalText).toBe('Fun fun fun');
});


test('displayText last line trimmed if theres another component following', () => {
    const componentProcessors = [
        new NoteTextProcessor(),
        new NoteChecklistProcessor()
    ];
    const defaultProcessor = new DefaultTextProcessor();
    const note = newNote('Hello, I like to swim\n\n<Checklist></Checklist>');
    const notu = new MockHttpClient() as any;

    const result = splitNoteTextIntoComponents(note, notu, componentProcessors, defaultProcessor, (components: Array<NoteComponent>) => new NoteParagraph(components));

    expect((result[0] as NoteText).displayText).toBe('Hello, I like to swim\n');
});


test('displayText first line trimmed if theres another component preceding', () => {
    const componentProcessors = [
        new NoteTextProcessor(),
        new NoteChecklistProcessor()
    ];
    const defaultProcessor = new DefaultTextProcessor();
    const note = newNote('<Checklist></Checklist>\n\nHello, I like to swim');
    const notu = new MockHttpClient() as any;

    const result = splitNoteTextIntoComponents(note, notu, componentProcessors, defaultProcessor, (components: Array<NoteComponent>) => new NoteParagraph(components));

    expect((result[1] as NoteText).displayText).toBe('\nHello, I like to swim');
});