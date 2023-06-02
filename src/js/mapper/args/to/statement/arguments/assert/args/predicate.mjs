import { js_node_property_elements } from '../../../../../../../node/property/elements.mjs';
import { object_property_get } from '../../../../../../../../object/property/get.mjs';
import { list_get } from '../../../../../../../../list/get.mjs';
import { js_mapper_args_to_statement_arguments_assert_args } from '../args.mjs';
export async function js_mapper_args_to_statement_arguments_assert_args_predicate(function_declaration) {
    const arguments_assert_args = await js_mapper_args_to_statement_arguments_assert_args(function_declaration);
    let array_expression = list_get(arguments_assert_args, 1);
    let args = object_property_get(array_expression, js_node_property_elements());
    return args;
}