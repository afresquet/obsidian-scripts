import { DataviewRefreshableRenderer } from "ui/refreshable-view";
import { DataviewApi } from "api/plugin-api";
export declare class DataviewJSRenderer extends DataviewRefreshableRenderer {
    api: DataviewApi;
    script: string;
    container: HTMLElement;
    origin: string;
    static PREAMBLE: string;
    constructor(api: DataviewApi, script: string, container: HTMLElement, origin: string);
    render(): Promise<void>;
}
/** Inline JS renderer accessible using '=$' by default. */
export declare class DataviewInlineJSRenderer extends DataviewRefreshableRenderer {
    api: DataviewApi;
    script: string;
    container: HTMLElement;
    target: HTMLElement;
    origin: string;
    static PREAMBLE: string;
    errorbox?: HTMLElement;
    constructor(api: DataviewApi, script: string, container: HTMLElement, target: HTMLElement, origin: string);
    render(): Promise<void>;
}
