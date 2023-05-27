import { todo } from "../todo.mjs";

export function number_is(candidate) {
    todo(`Maybe revisit after learning about JS number nuance`);
    return Number.isFinite(candidate);
}