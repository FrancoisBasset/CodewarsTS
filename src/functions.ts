export const boolToWord = (bool: boolean): string => {
    return bool ? 'Yes' : 'No';
};

export function lovefunc(flower1: number, flower2: number): boolean {
    return (flower1 + flower2) % 2 != 0;
}

export function removeChar(str: string): string {
    str = str.slice(1);
    str = str.slice(0, str.length - 1);

    return str;
}

export function switchItUp(intNumber: number): string {
    const outputs: string[] = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return outputs[intNumber];
}