import { object_property_get } from '../../../../../../../../../object/property/get.mjs';
import { js_node_property_elements } from '../../../../../../../../node/property/elements.mjs';
import { list_get } from '../../../../../../../../../list/get.mjs';
import { integer_value_1 } from '../../../../../../../../../integer/value/1.mjs';
import { js_mapper_args_to_statement_arguments_assert_args } from '../../../../../../../../mapper/args/to/statement/arguments/assert/args.mjs';
import { js_node_is_function_declaration } from '../../../../../../../../node/is/function/declaration.mjs';
import { arguments_assert } from '../../../../../../../../../arguments/assert.mjs';
export async function js_function_declaration_to_statement_arguments_assert_args_predicate_added(function_declaration) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let {arguments_assert_args, added} = await js_mapper_args_to_statement_arguments_assert_args(function_declaration);
    let v_2 = integer_value_1();
    let array_expression = list_get(arguments_assert_args, v_2);
    let v = js_node_property_elements();
    let args = object_property_get(array_expression, v);
    return {
        args,
        added
    };
}