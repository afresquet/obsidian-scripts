import { Decoration, DecorationSet, EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view";
import { Range } from "@codemirror/state";
import { DataviewSettings } from "../settings";
import { FullIndex } from "../data-index";
import { App, Component, TFile } from "obsidian";
import { DataviewApi } from "../api/plugin-api";
import { SyntaxNode } from "@lezer/common";
export declare function inlinePlugin(app: App, index: FullIndex, settings: DataviewSettings, api: DataviewApi): ViewPlugin<{
    decorations: DecorationSet;
    component: Component;
    update(update: ViewUpdate): void;
    updateTree(view: EditorView): void;
    removeDeco(node: SyntaxNode): void;
    addDeco(node: SyntaxNode, view: EditorView): void;
    renderNode(view: EditorView, node: SyntaxNode): {
        render: boolean;
        isQuery: boolean;
    };
    isInlineQuery(view: EditorView, start: number, end: number): boolean;
    inlineRender(view: EditorView): DecorationSet | undefined;
    renderWidget(node: SyntaxNode, view: EditorView, currentFile: TFile): Range<Decoration> | undefined;
    destroy(): void;
}>;
