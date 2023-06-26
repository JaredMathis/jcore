import { metadata } from '../../../metadata.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_keyword_return } from '../../keyword/return.mjs';
import { js_code_statement } from '../statement.mjs';
export function js_code_return_statement(return_expression_code) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = `${ js_keyword_return() } ${ return_expression_code }`;
    let v = js_code_statement(v_2);
    return v;
    metadata([]);
}