export type { DataviewApi } from "api/plugin-api";
export type { DateTime, Duration } from "luxon";
export type { Link, DataObject, LiteralType, Literal, LiteralRepr, WrappedLiteral, LiteralWrapper, Widget, } from "data-model/value";
export type { Result, Success, Failure } from "api/result";
export type { DataArray } from "api/data-array";
export type { ListItem, PageMetadata } from "data-model/markdown";
export type { FullIndex, PrefixIndex, IndexMap } from "data-index/index";
export type { SMarkdownPage, SListEntry, STask } from "data-model/serialized/markdown";
export { DURATION_TYPES, DATE_SHORTHANDS, KEYWORDS, ExpressionLanguage, EXPRESSION, parseField, } from "expression/parse";
export { QUERY_LANGUAGE } from "query/parse";
export { Query } from "query/query";
import type { DataviewApi } from "api/plugin-api";
import "obsidian";
import type { App } from "obsidian";
/**
 * Get the current Dataview API from the app if provided; if not, it is inferred from the global API object installed
 * on the window.
 */
export declare const getAPI: (app?: App) => DataviewApi | undefined;
/** Determine if Dataview is enabled in the given application. */
export declare const isPluginEnabled: (app: App) => boolean;
