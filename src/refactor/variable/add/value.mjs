import { js_token_equal } from '../../../js/token/equal.mjs';
import { refactor_variable_add_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_variable_add_value(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {identifier_value} = args;
    let after_let_identifier = `${ js_token_equal() } ${ identifier_value }`;
    await refactor_variable_add_generic(args, after_let_identifier);
    metadata([]);
}