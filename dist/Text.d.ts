import { Property } from 'csstype';
interface TextProps {
    color?: string;
    fontWeight?: Property.FontWeight;
    fontSize?: string | number;
    whiteSpace?: Property.WhiteSpace;
}
export declare const Text: import("styled-components").StyledComponent<"span", any, TextProps, never>;
export {};
