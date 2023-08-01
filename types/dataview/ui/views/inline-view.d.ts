import { FullIndex } from "data-index";
import { Field } from "expression/field";
import { App } from "obsidian";
import { DataviewSettings } from "settings";
import { DataviewRefreshableRenderer } from "ui/refreshable-view";
/** Refreshable renderer which renders inline instead of in a div. */
export declare class DataviewInlineRenderer extends DataviewRefreshableRenderer {
    field: Field;
    fieldText: string;
    container: HTMLElement;
    target: HTMLElement;
    index: FullIndex;
    origin: string;
    settings: DataviewSettings;
    app: App;
    errorbox?: HTMLElement;
    constructor(field: Field, fieldText: string, container: HTMLElement, target: HTMLElement, index: FullIndex, origin: string, settings: DataviewSettings, app: App);
    render(): Promise<void>;
}
