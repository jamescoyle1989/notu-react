import { expect, test } from 'vitest';
import { DefaultTextProcessor, NoteText, NoteTextProcessor } from '../../src/notecomponents/NoteText';
import { NoteChecklist, NoteChecklistProcessor } from '../../src/notecomponents/NoteChecklist';
import { newNote } from '../../src/stories/StoryHelpers';
import { MockHttpClient } from '../../src/helpers/MockHttpClient';
import { splitNoteTextIntoComponents } from '../../src/notecomponents/NoteComponent';


test('splitNoteIntoComponents returns correct component array', () => {
    const componentProcessors = [
        new NoteTextProcessor(),
        new NoteChecklistProcessor()
    ];
    const defaultProcessor = new DefaultTextProcessor();
    const note = newNote('Hello, I like to swim\n\n<Checklist>\n- Do front crawl\n- Do breast stroke\n</Checklist>Fun fun fun');
    const notu = new MockHttpClient() as any;

    const result = splitNoteTextIntoComponents(note, notu, componentProcessors, defaultProcessor);

    expect(result.length).toBe(3);
    expect(result[0]).toBeInstanceOf(NoteText);
    expect(result[1]).toBeInstanceOf(NoteChecklist);
    expect(result[2]).toBeInstanceOf(NoteText);
    expect((result[0] as NoteText).text).toBe('Hello, I like to swim\n\n');
    expect((result[1] as NoteChecklist).lines).toEqual(['- Do front crawl', '- Do breast stroke']);
    expect((result[2] as NoteText).text).toBe('Fun fun fun');
});