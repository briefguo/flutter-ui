/// <reference types="react" />
interface CountDownTextProps {
    text: string;
    renderCountDown: (time: string) => string;
    onSend?: () => Promise<boolean>;
}
export declare const CountDownText: (props: CountDownTextProps) => JSX.Element;
export {};
