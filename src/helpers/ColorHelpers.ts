import chroma from 'chroma-js';


export function getTextColorClass(bgColor: string): string {
    const whiteContrast = chroma.contrast(bgColor, '#FFF');
    const blackContrast = chroma.contrast(bgColor, '#000');
    return (whiteContrast > blackContrast) ? 'has-text-white' : 'has-text-black';
}