import { PageMetadata } from "data-model/markdown";
import { CachedMetadata, FileStats } from "obsidian";
export declare function runImport(path: string, contents: string, stats: FileStats, metadata: CachedMetadata): Partial<PageMetadata>;
