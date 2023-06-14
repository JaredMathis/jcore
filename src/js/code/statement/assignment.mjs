import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_statement_end } from '../../statement/end.mjs';
import { js_keyword_let } from '../../keyword/let.mjs';
import { js_token_equal } from '../../token/equal.mjs';
export function js_code_statement_assignment(identifier, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let keyword_let = js_keyword_let();
    let statement = `${ keyword_let } ${ identifier } ${ js_token_equal() } ${ value }${ js_statement_end() }`;
    return statement;
}