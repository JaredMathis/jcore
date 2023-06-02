import { list_index_of } from '../../../../list/index/of.mjs';
import { js_node_is_call_expression } from '../../../../js/node/is/call/expression.mjs';
import { js_node_is_assignment_expression } from '../../../../js/node/is/assignment/expression.mjs';
import { js_export_function_single } from '../../../../js/export/function/single.mjs';
import { function_parse } from '../../../parse.mjs';
import { js_node_property_elements } from '../../../../js/node/property/elements.mjs';
import { list_each_with_index } from '../../../../list/each/with/index.mjs';
import { arguments_assert_predicate_default } from '../../../../arguments/assert/predicate/default.mjs';
import { js_node_property_name } from '../../../../js/node/property/name.mjs';
import { js_node_property_arguments } from '../../../../js/node/property/arguments.mjs';
import { js_statement_expression_to_expression } from '../../../../js/statement/expression/to/expression.mjs';
import { log } from '../../../../log.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_callers } from '../../../callers.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { equal } from '../../../../equal.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../../../../js/mapper/args/to/statement/arguments/assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_property_params } from '../../../../js/node/property/params.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { assert } from '../../../../assert.mjs';
import { js_node_is_identifier } from '../../../../js/node/is/identifier.mjs';
import { comment } from '../../../../comment.mjs';
import { list_get } from '../../../../list/get.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { js_visit_nodes } from '../../../../js/visit/nodes.mjs';
import { error } from '../../../../error.mjs';
import { js_call_expression_to_name_or_null } from '../../../../js/call/expression/to/name/or/null.mjs';
import { list_map } from '../../../../list/map.mjs';
export async function function_callers_arguments_assert_auto(function_name) {
    arguments_assert(arguments, [string_identifier_is]);

    let callers = await function_callers(function_name);
    for (let c of callers) {
        if (equal(function_name, c)) {
            continue;
        }
        let c_parsed = await function_parse(c);
        let function_declaration = js_export_function_single(c_parsed);
        let params = object_property_get(function_declaration, js_node_property_params());
        if (list_length_is_0(params)) {
            continue;
        }
        let params_names = list_map(params, p => object_property_get(p, 'name'));
        const arguments_assert_args = await js_mapper_args_to_statement_arguments_assert_args(function_declaration);
        let array_expression = list_get(arguments_assert_args, 1);
        let args = object_property_get(array_expression, js_node_property_elements());
        list_each_with_index(args, function lambda(arg, index) {
            comment(`If this isn't true then this code needs changing`);
            assert(js_node_is_identifier(arg));
            let predicate_name = object_property_get(arg, js_node_property_name());
            let default_name = function_name_get(arguments_assert_predicate_default());
            console.log({
                predicate_name,
                default_name
            });
            if (equal(predicate_name, default_name)) {
                js_visit_nodes(c_parsed, js_node_is_assignment_expression, v => {
                    error('handle this situation');
                });
                js_visit_nodes(c_parsed, js_node_is_call_expression, v => {
                    let {node} = v;
                    let ce_name = js_call_expression_to_name_or_null(node);
                    if (ce_name !== null) {
                        if (equal(ce_name, function_name)) {
                            let ce_args = object_property_get(node, js_node_property_arguments());
                            let ce_arg_for_arg = list_get(ce_args, index);



                            let ce_arg_for_arg_name = object_property_get(ce_arg_for_arg, 'name');
                            let params_index = list_index_of(params_names, ce_arg_for_arg_name);


                            

                            let arguments_assert_arg_identifier = list_get(params, params_index);
                            let arguments_assert_arg_identifier_name = object_property_get(arguments_assert_arg_identifier, 'name');
                            
                            console.log({ arguments_assert_arg_identifier_name, ce_arg_for_arg });
                        }
                    }
                });
            }
        });
        let arguments_assert_statement_predicates = [];
        console.log({
            function_declaration,
        });
        return;
    }
    console.log(callers);
}

async function js_mapper_args_to_statement_arguments_assert_args(function_declaration) {
    let arguments_assert_statement = await js_mapper_args_to_statement_arguments_assert({ function_declaration });
    let arguments_assert_call_expression = js_statement_expression_to_expression(arguments_assert_statement);
    const arguments_assert_args = object_property_get(arguments_assert_call_expression, js_node_property_arguments());
    return arguments_assert_args;
}
