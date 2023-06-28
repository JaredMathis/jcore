import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
export function js_code_expression_string(normalized) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return `'${ normalized }'`;
    metadata([]);
}