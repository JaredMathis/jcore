import { metadata } from '../metadata.mjs';
import { error } from '../error.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function tests_add() {
    arguments_assert(arguments, []);
    let v = 'todo: tests_add';
    error(v);
    metadata([]);
}