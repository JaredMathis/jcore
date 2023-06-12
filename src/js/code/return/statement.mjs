import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_statement_end } from '../../statement/end.mjs';
import { js_keyword_return } from '../../keyword/return.mjs';
export function js_code_return_statement(return_expression) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return `${ js_keyword_return() } ${ return_expression }${ js_statement_end() }`;
}