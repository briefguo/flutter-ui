import { Colors } from './Colors';
import { TextThemeData } from './TextThemeData';
export declare class ThemeData {
    contentContainerWidth: string;
    bodyContrastingColor: string;
    bodyBackground: string;
    baseBorderRadius: string;
    colors: typeof Colors;
    textTheme: TextThemeData;
    static defaultTheme: ThemeData;
    constructor(v: Partial<ThemeData>);
    copyWith(v: Partial<ThemeData>): ThemeData;
}
