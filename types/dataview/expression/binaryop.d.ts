/** Provides a global dispatch table for evaluating binary operators, including comparison. */
import { LiteralRepr, LiteralType, Literal } from "data-model/value";
import { Result } from "api/result";
import { BinaryOp } from "expression/field";
import type { Context } from "expression/context";
/** A literal type or a catch-all '*'. */
export declare type LiteralTypeOrAll = LiteralType | "*";
/** Maps a literal type or the catch-all '*'. */
export declare type LiteralReprAll<T extends LiteralTypeOrAll> = T extends "*" ? Literal : T extends LiteralType ? LiteralRepr<T> : any;
/** An implementation for a binary operator. */
export declare type BinaryOpImpl<A extends Literal, B extends Literal> = (first: A, second: B, ctx: Context) => Literal;
/** An implementation of a comparator (returning a number) which then automatically defines all of the comparison operators. */
export declare type CompareImpl<T extends Literal> = (first: T, second: T, ctx: Context) => number;
/** Provides implementations for binary operators on two types using a registry. */
export declare class BinaryOpHandler {
    private map;
    static create(): BinaryOpHandler;
    constructor();
    register<T extends LiteralTypeOrAll, U extends LiteralTypeOrAll>(left: T, op: BinaryOp, right: U, func: BinaryOpImpl<LiteralReprAll<T>, LiteralReprAll<U>>): BinaryOpHandler;
    registerComm<T extends LiteralTypeOrAll, U extends LiteralTypeOrAll>(left: T, op: BinaryOp, right: U, func: BinaryOpImpl<LiteralReprAll<T>, LiteralReprAll<U>>): BinaryOpHandler;
    /** Implement a comparison function. */
    compare<T extends LiteralTypeOrAll>(type: T, compare: CompareImpl<LiteralReprAll<T>>): BinaryOpHandler;
    /** Attempt to evaluate the given binary operator on the two literal fields. */
    evaluate(op: BinaryOp, left: Literal, right: Literal, ctx: Context): Result<Literal, string>;
    /** Create a string representation of the given triplet for unique lookup in the map. */
    static repr(op: BinaryOp, left: LiteralTypeOrAll, right: LiteralTypeOrAll): string;
}
/** Configure and create a binary OP handler with the given parameters. */
export declare function createBinaryOps(linkNormalizer: (x: string) => string): BinaryOpHandler;
