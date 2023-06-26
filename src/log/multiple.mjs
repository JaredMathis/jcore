import { metadata } from '../metadata.mjs';
import { log_multiple_map } from './multiple/map.mjs';
import { identity } from '../identity.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function log_multiple(list) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let mapper = identity;
    log_multiple_map(list, mapper);
    metadata([]);
}