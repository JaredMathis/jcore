import { arguments_assert_todo } from '../../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { js_function_declaration_to_statement_arguments_assert_added } from '../../../../../../function/declaration/to/statement/arguments/assert/added.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { js_node_is_function_declaration } from '../../../../../../node/is/function/declaration.mjs';
export async function js_mapper_args_to_statement_arguments_assert_added(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args;
    let v = js_node_is_function_declaration(function_declaration);
    assert(v);
    let result = await js_function_declaration_to_statement_arguments_assert_added(function_declaration);
    return result;
}