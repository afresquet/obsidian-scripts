import { FullIndex } from "data-index";
import { App } from "obsidian";
import { Query } from "query/query";
import { DataviewSettings } from "settings";
import { DataviewRefreshableRenderer } from "ui/refreshable-view";
export declare class DataviewCalendarRenderer extends DataviewRefreshableRenderer {
    query: Query;
    container: HTMLElement;
    index: FullIndex;
    origin: string;
    settings: DataviewSettings;
    app: App;
    private calendar;
    constructor(query: Query, container: HTMLElement, index: FullIndex, origin: string, settings: DataviewSettings, app: App);
    render(): Promise<void>;
    onClose(): Promise<void>;
}
