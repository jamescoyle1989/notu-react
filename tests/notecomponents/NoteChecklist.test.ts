import { expect, test } from 'vitest';
import { NoteChecklistProcessor } from '../../src';


test('NoteChecklist supports removing completed items', () => {
    const processor = new NoteChecklistProcessor();

    const componentInfo = processor.identify(`<Checklist>
✔ Do the dishes
Fold laundry
✔ Take out the trash
</Checklist>`);

    const checklist = processor.create(componentInfo, null, null);
    expect(checklist.lines).toHaveLength(3);

    checklist.removeFinishedItems();
    expect(checklist.lines).toHaveLength(1);
    expect(checklist.lines[0]).toBe('Fold laundry');
});