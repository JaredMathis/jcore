import { js_node_property_arguments } from '../../../../../../node/property/arguments.mjs';
import { object_property_get } from '../../../../../../../object/property/get.mjs';
import { js_statement_expression_to_expression } from '../../../../../../statement/expression/to/expression.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../assert.mjs';
import { tautology } from '../../../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export async function js_mapper_args_to_statement_arguments_assert_args(function_declaration) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let arguments_assert_statement = await js_mapper_args_to_statement_arguments_assert({ function_declaration });
    let arguments_assert_call_expression = js_statement_expression_to_expression(arguments_assert_statement);
    const arguments_assert_args = object_property_get(arguments_assert_call_expression, js_node_property_arguments());
    return arguments_assert_args;
}