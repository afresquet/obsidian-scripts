import { SListItem } from "data-model/serialized/markdown";
import { Grouping, Literal } from "data-model/value";
import { ExportSettings, QuerySettings } from "settings";
/** Render a table of literals to Markdown. */
export declare function markdownTable(headers: string[], values: Literal[][], settings?: QuerySettings & ExportSettings): string;
/** Render a list of literal elements to a markdown list. */
export declare function markdownList(values: Literal[], settings?: QuerySettings & ExportSettings): string;
/** Render the result of a task query to markdown. */
export declare function markdownTaskList(tasks: Grouping<SListItem>, settings?: QuerySettings & ExportSettings, depth?: number): string;
