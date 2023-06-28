import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_prefix } from '../prefix.mjs';
import { js_identifier_combine } from '../identifier/combine.mjs';
export function js_prefix_generic(suffix) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return js_identifier_combine(js_prefix(), suffix);
}