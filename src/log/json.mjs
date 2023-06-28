import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { json_to } from '../json/to.mjs';
import { log } from '../log.mjs';
export function log_json(o) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = json_to(o);
    log(v);
    metadata([]);
}