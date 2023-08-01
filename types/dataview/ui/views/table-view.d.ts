import { Literal } from "data-model/value";
import { Query } from "query/query";
import { DataviewInit } from "ui/markdown";
import { h } from "preact";
import { MarkdownRenderChild } from "obsidian";
/** Simple table over headings and corresponding values. */
export declare function TableGrouping({ headings, values, sourcePath, }: {
    headings: string[];
    values: Literal[][];
    sourcePath: string;
}): h.JSX.Element;
export declare type TableViewState = {
    state: "loading";
} | {
    state: "error";
    error: string;
} | {
    state: "ready";
    headings: string[];
    values: Literal[][];
};
/** Pure view over list elements.  */
export declare function TableView({ query, sourcePath }: {
    query: Query;
    sourcePath: string;
}): h.JSX.Element;
export declare function createTableView(init: DataviewInit, query: Query, sourcePath: string): MarkdownRenderChild;
export declare function createFixedTableView(init: DataviewInit, headings: string[], values: Literal[][], sourcePath: string): MarkdownRenderChild;
