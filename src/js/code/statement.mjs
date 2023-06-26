import { metadata } from '../../metadata.mjs';
import { js_statement_end } from '../statement/end.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function js_code_statement(value) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let statement = `${ value }${ js_statement_end() }`;
    return statement;
    metadata([]);
}