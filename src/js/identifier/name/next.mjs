import { metadata } from '../../../metadata.mjs';
import { js_identifier_name_next_prefix } from './next/prefix.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_identifier_name_next(parsed) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let identifier_next_prefix = 'v';
    let v = js_identifier_name_next_prefix(parsed, identifier_next_prefix);
    return v;
    metadata([]);
}