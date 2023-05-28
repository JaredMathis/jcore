import { todo } from '../todo.mjs';
export function number_is(candidate) {
    todo(`Maybe revisit after learning about JS number nuance - what about Infinity, NaN, etc.`);
    return Number.isFinite(candidate);
}