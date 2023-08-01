import { MarkdownPostProcessorContext } from "obsidian";
import { DataviewInit } from "ui/markdown";
/** Replaces raw textual inline fields in text containers with pretty HTML equivalents. */
export declare function replaceInlineFields(ctx: MarkdownPostProcessorContext, init: DataviewInit): Promise<void>;
