import { FullIndex } from "data-index";
import { App, MarkdownRenderChild } from "obsidian";
import { DataviewSettings } from "settings";
/** Generic code for embedded Dataviews. */
export declare abstract class DataviewRefreshableRenderer extends MarkdownRenderChild {
    container: HTMLElement;
    index: FullIndex;
    app: App;
    settings: DataviewSettings;
    private lastReload;
    constructor(container: HTMLElement, index: FullIndex, app: App, settings: DataviewSettings);
    abstract render(): Promise<void>;
    onload(): void;
    maybeRefresh: () => void;
}
