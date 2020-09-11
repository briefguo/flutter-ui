import { StyleData } from './StyleData';
export declare class TextThemeData {
    static default: StyleData;
    static small: StyleData;
    static middle: StyleData;
    static large: StyleData;
    static xlarge: StyleData;
    static xxlarge: StyleData;
    static defaultTextTheme: any;
    constructor(v: {
        [key: string]: StyleData;
    });
    copyWith(v: {
        [key: string]: StyleData;
    }): TextThemeData;
}
