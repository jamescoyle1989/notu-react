import { expect, test } from 'vitest';
import { NoteRandomChoiceProcessor } from '../../src';
import { FakeDateProvider } from '../../src/helpers/DateProvider';


test('RandomChoiceProcessor can identify component without frequency', () => {
    const processor = new NoteRandomChoiceProcessor();
    
    const result = processor.identify('Hello <RandomChoice></RandomChoice>');

    expect(result.start).toBe(6);
    expect(result.processor).toBe(processor);
    expect(result.text).toBe('<RandomChoice></RandomChoice>')
});


test('RandomChoiceProcessor can identify daily frequency component', () => {
    const processor = new NoteRandomChoiceProcessor();
    
    const result = processor.identify('Hello <RandomChoice Frequency="Daily"></RandomChoice>');

    expect(result.start).toBe(6);
    expect(result.processor).toBe(processor);
    expect(result.text).toBe('<RandomChoice Frequency="Daily"></RandomChoice>')
});


test('RandomChoiceProcessor will generate different results when frequency is Every Load', () => {
    const processor = new NoteRandomChoiceProcessor(new FakeDateProvider(new Date()));
    const componentInfo = processor.identify(`Hello <RandomChoice Frequency="Every Load">
abc
def
ghi
</RandomChoice>`);
    
    let previousResult = null;
    for (let i = 0; i < 50; i++) {
        const component = processor.create(componentInfo, null, null);
        if (previousResult != null && previousResult != component.displayText)
            return;
        previousResult = component.displayText;
    }
    throw new Error('All results were the same');
});


test('RandomChoiceProcessor will generate the same result when frequency is Daily', () => {
    const processor = new NoteRandomChoiceProcessor(new FakeDateProvider(new Date()));
    const componentInfo = processor.identify(`Hello <RandomChoice Frequency="Daily">
abc
def
ghi
</RandomChoice>`);

    let previousResult = null;
    for (let i = 0; i < 10; i++) {
        const component = processor.create(componentInfo, null, null);
        if (previousResult != null && previousResult != component.displayText)
            throw new Error('Not all results were the same');
        previousResult = component.displayText;
    }
});


test('RandomChoiceProcessor will generate different results for different days when frequency is Daily', () => {
    const processors = new Array<NoteRandomChoiceProcessor>();
    for (let i = 1; i <= 20; i++)
        processors.push(new NoteRandomChoiceProcessor(new FakeDateProvider(new Date(`2025-01-${i.toString().padStart(2, '0')}`))));
    const componentInfo = processors[0].identify(`Hello <RandomChoice Frequency="Daily">
abc
def
ghi
</RandomChoice>`);

    let previousResult = null;
    for (const processor of processors) {
        const component = processor.create(componentInfo, null, null);
        if (previousResult != null && previousResult != component.displayText)
            return;
        previousResult = component.displayText;
    }
    throw new Error('All results were the same');
});


test('RandomChoiceProcessor will generate different results for different days of the month when frequency is Monthly', () => {
    const processors = new Array<NoteRandomChoiceProcessor>();
    for (let i = 1; i <= 20; i++)
        processors.push(new NoteRandomChoiceProcessor(new FakeDateProvider(new Date(`2025-01-${i.toString().padStart(2, '0')}`))));
    const componentInfo = processors[0].identify(`Hello <RandomChoice Frequency="Monthly">
abc
def
ghi
</RandomChoice>`);

    let previousResult = null;
    for (const processor of processors) {
        const component = processor.create(componentInfo, null, null);
        if (previousResult != null && previousResult != component.displayText)
            return;
        previousResult = component.displayText;
    }
    throw new Error('All results were the same');
});


test('RandomChoiceProcessor will generate different results for different random choices within the same note when frequency is Daily', () => {
    const processors = new Array<NoteRandomChoiceProcessor>();
    for (let i = 1; i <= 20; i++)
        processors.push(new NoteRandomChoiceProcessor(new FakeDateProvider(new Date(`2025-01-${i.toString().padStart(2, '0')}`))));
    const componentInfo1 = processors[0].identify(`<RandomChoice Frequency="Daily">
abc
def
ghi
</RandomChoice>`);
    const componentInfo2 = processors[0].identify(`Some leading text: <RandomChoice Frequency="Daily">
abc
def
ghi
</RandomChoice>`);

    for (const processor of processors) {
        const component1 = processor.create(componentInfo1, null, null);
        const component2 = processor.create(componentInfo2, null, null);
        if (!component2.displayText.includes(component1.displayText))
            return;
    }
    throw new Error('For each day, both random choices had the same result');
});