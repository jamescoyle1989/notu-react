import { expect, test } from 'vitest';
import { DefaultTextProcessor, NoteText, NoteTextProcessor } from '../../src/notecomponents/NoteText';
import { NoteChecklist, NoteChecklistProcessor } from '../../src/notecomponents/NoteChecklist';
import { newNote } from '../../src/stories/StoryHelpers';
import { MockHttpClient } from '../../src/helpers/MockHttpClient';
import { splitNoteTextIntoComponents } from 'notu';
import { NoteComponent } from 'notu/dist/types/notecomponents/NoteComponent';
import { NoteLinkProcessor, NoteParagraph } from '../../src';
import { NoteLink } from '../../src/notecomponents/NoteLink';


test('splitNoteIntoComponents returns correct component array', () => {
    const componentProcessors = [
        new NoteTextProcessor(),
        new NoteChecklistProcessor()
    ];
    const defaultProcessor = new DefaultTextProcessor();
    const note = newNote('Hello, I like to swim\n\n<Checklist>\n- Do front crawl\n- Do breast stroke\n</Checklist>Fun fun fun');
    const notu = new MockHttpClient() as any;

    const result = splitNoteTextIntoComponents(note, notu, componentProcessors, defaultProcessor, (components: Array<NoteComponent>) => new NoteParagraph(components));

    const paragraph1 = result[0] as NoteParagraph;
    expect(paragraph1.children.length).toBe(1);
    expect(paragraph1.children[0]).toBeInstanceOf(NoteText);
    expect((paragraph1.children[0] as NoteText).originalText).toBe('Hello, I like to swim\n\n');

    expect((result[1] as NoteChecklist).lines).toEqual(['- Do front crawl', '- Do breast stroke']);

    const paragraph2 = result[2] as NoteParagraph;
    expect(paragraph2.children.length).toBe(1);
    expect(paragraph2.children[0]).toBeInstanceOf(NoteText);
    expect((paragraph2.children[0] as NoteText).originalText).toBe('Fun fun fun');
});


test('displayText last line trimmed if theres another paragraph following', () => {
    const componentProcessors = [
        new NoteTextProcessor(),
        new NoteChecklistProcessor()
    ];
    const defaultProcessor = new DefaultTextProcessor();
    const note = newNote('Hello, I like to swim\n\n<Checklist></Checklist>');
    const notu = new MockHttpClient() as any;

    const result = splitNoteTextIntoComponents(note, notu, componentProcessors, defaultProcessor, (components: Array<NoteComponent>) => new NoteParagraph(components));

    const paragraph = result[0] as NoteParagraph;
    expect((paragraph.children[0] as NoteText).displayText).toBe('Hello, I like to swim');
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

    const paragraph = result[1] as NoteParagraph;
    expect((paragraph.children[0] as NoteText).displayText).toBe('Hello, I like to swim');
});


test('Link, then newline, then text is structured correctly', () => {
    const componentProcessors = [
        new NoteTextProcessor(),
        new NoteLinkProcessor()
    ];
    const defaultProcessor = new DefaultTextProcessor();
    const note = newNote('<Link>https://www.google.com</Link>\nText on a separate line');
    const notu = new MockHttpClient() as any;

    const result = splitNoteTextIntoComponents(note, notu, componentProcessors, defaultProcessor, (components: Array<NoteComponent>) => new NoteParagraph(components));

    expect(result.length).toBe(1);
    const paragraph = result[0] as NoteParagraph;
    expect(paragraph.children.length).toBe(2);
    expect((paragraph.children[0] as NoteLink).url).toBe('https://www.google.com');
    expect((paragraph.children[1] as NoteText).displayText).toBe('\nText on a separate line');
});