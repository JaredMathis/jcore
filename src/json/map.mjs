import { function_is } from '../function/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { json_to } from './to.mjs';
import { json_from } from './from.mjs';
export function json_map(json_before, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    let json_parsed = json_from(json_before);
    map(json_parsed);
    let json_after = json_to(json_parsed);
    return json_after;
    metadata([]);
}