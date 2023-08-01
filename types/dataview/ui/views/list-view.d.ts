import { MarkdownRenderChild } from "obsidian";
import { Query } from "query/query";
import { DataviewInit } from "ui/markdown";
import { h } from "preact";
import { Literal } from "data-model/value";
export declare function ListGrouping({ items, sourcePath }: {
    items: Literal[];
    sourcePath: string;
}): h.JSX.Element;
export declare type ListViewState = {
    state: "loading";
} | {
    state: "error";
    error: string;
} | {
    state: "ready";
    items: Literal[];
};
/** Pure view over list elements.  */
export declare function ListView({ query, sourcePath }: {
    query: Query;
    sourcePath: string;
}): h.JSX.Element;
export declare function createListView(init: DataviewInit, query: Query, sourcePath: string): MarkdownRenderChild;
export declare function createFixedListView(init: DataviewInit, elements: Literal[], sourcePath: string): MarkdownRenderChild;
