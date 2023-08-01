import { Literal } from "data-model/value";
import { Context, LinkHandler } from "expression/context";
/** Expect that the given dataview expression resolves to the given value. */
export declare function expectEvals(text: string, result: Literal): void;
/** Parse a field expression and evaluate it in the simple context. */
export declare function parseEval(text: string): Literal;
/** Create a trivial link handler which never resolves links. */
export declare function simpleLinkHandler(): LinkHandler;
/** Create a trivial context good for evaluations that do not depend on links. */
export declare function simpleContext(): Context;
