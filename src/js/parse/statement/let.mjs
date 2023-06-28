import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_keyword_let } from '../../keyword/let.mjs';
import { js_parse_statement } from '../statement.mjs';
export function js_parse_statement_let(identifier, after_let_identifier) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = `${ js_keyword_let() } ${ identifier }${ after_let_identifier }`;
    let v = js_parse_statement(v_2);
    return v;
    metadata([]);
}