import { js_function_declaration_to_statement_arguments_assert } from '../../../../../function/declaration/to/statement/arguments/assert.mjs';
import { js_mapper_args_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { assert } from '../../../../../../assert.mjs';
import { js_node_is_function_declaration } from '../../../../../node/is/function/declaration.mjs';
export async function js_mapper_args_to_statement_arguments_assert(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {function_declaration} = args;
    assert(js_node_is_function_declaration(function_declaration));
    return await js_function_declaration_to_statement_arguments_assert(function_declaration);
}