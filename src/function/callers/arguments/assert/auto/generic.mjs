import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { equal_not } from '../../../../../equal/not.mjs';
import { not } from '../../../../../not.mjs';
import { occurs } from '../../../../../occurs.mjs';
import { js_call_expression_arguments_get } from '../../../../../js/call/expression/arguments/get.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../../../../js/visit/nodes/call/expression/name/equal.mjs';
import { js_node_property_end } from '../../../../../js/node/property/end.mjs';
import { js_node_property_start } from '../../../../../js/node/property/start.mjs';
import { function_map_args } from '../../../../map/args.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { json_equal_keys_without } from '../../../../../json/equal/keys/without.mjs';
import { list_each_with_index } from '../../../../../list/each/with/index.mjs';
import { comment } from '../../../../../comment.mjs';
import { list_add_if_not_exists } from '../../../../../list/add/if/not/exists.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { refactor_import_fix } from '../../../../../refactor/import/fix.mjs';
import { list_set } from '../../../../../list/set.mjs';
import { list_get } from '../../../../../list/get.mjs';
import { js_node_property_left } from '../../../../../js/node/property/left.mjs';
import { js_node_is_assignment_expression } from '../../../../../js/node/is/assignment/expression.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
import { arguments_assert_predicate_default } from '../../../../../arguments/assert/predicate/default.mjs';
import { function_name_get } from '../../../../name/get.mjs';
import { js_node_property_name } from '../../../../../js/node/property/name.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
import { assert } from '../../../../../assert.mjs';
import { list_each_with_index_async } from '../../../../../list/each/with/index/async.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../../../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { list_empty } from '../../../../../list/empty.mjs';
import { js_node_property_params } from '../../../../../js/node/property/params.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { equal } from '../../../../../equal.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
comment(`Simplify this function - I don't understand it fully to guarantee it works through logical proof`);
export async function function_callers_arguments_assert_auto_generic(c_function_name, function_name, arguments_assert_args, result) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is,
        list_is,
        list_is
    ]);
    let v_12 = equal(function_name, c_function_name);
    if (v_12) {
        return;
    }
    await function_map_args(c_function_name, mapper);
    async function mapper(c_args) {
        let v_22 = 'parsed';
        let c_parsed = object_property_get(c_args, v_22);
        let v_23 = 'function_declaration';
        let c_function_declaration = object_property_get(c_args, v_23);
        let v_2 = js_node_property_params();
        let c_params = object_property_get(c_function_declaration, v_2);
        let v_13 = list_empty(c_params);
        if (v_13) {
            let v_37 = boolean_value_true();
            return v_37;
        }
        let c_arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(c_function_declaration);
        let v_24 = async function lambda(c_arg, c_arg_index) {
            let c_param = list_get(c_params, c_arg_index);
            let v_3 = js_node_property_name();
            let c_param_name = object_property_get(c_param, v_3);
            comment(`If this isn't true then this code needs changing`);
            let v_4 = js_node_is_identifier(c_arg);
            assert(v_4);
            let v_5 = js_node_property_name();
            let c_predicate_name = object_property_get(c_arg, v_5);
            let v_6 = arguments_assert_predicate_default();
            let default_name = function_name_get(v_6);
            let v_25 = equal(c_predicate_name, default_name);
            let v_14 = not(v_25);
            if (v_14) {
                let v_38 = boolean_value_false();
                return v_38;
            }
            let occurs = boolean_value_false();
            let assignment_exists = boolean_value_false();
            let v_26 = function v_9(v) {
                let {node} = v;
                let v_7 = js_node_property_left();
                let left = object_property_get(node, v_7);
                let v_15 = js_node_is_identifier(left);
                if (v_15) {
                    let v_31 = 'name';
                    let v_29 = object_property_get(left, v_31);
                    let v_16 = equal(v_29, c_predicate_name);
                    if (v_16) {
                        comment(`Value has been changed - will not assume predicate can be copied`);
                        assignment_exists = boolean_value_true();
                    }
                }
            };
            js_visit_nodes_filter(c_parsed, js_node_is_assignment_expression, v_26);
            let v_27 = boolean_value_true();
            let v_17 = equal(assignment_exists, v_27);
            if (v_17) {
                return occurs;
            }
            let v_28 = function v_10(v) {
                let {node} = v;
                let ce_args = js_call_expression_arguments_get(node);
                let v_30 = function v_11(ce_arg, ce_arg_index) {
                    let v_32 = js_node_is_identifier(ce_arg);
                    let v_18 = not(v_32);
                    if (v_18) {
                        return;
                    }
                    let v_33 = 'name';
                    const ce_arg_name = object_property_get(ce_arg, v_33);
                    let v_34 = equal(c_param_name, ce_arg_name);
                    let v_19 = not(v_34);
                    if (v_19) {
                        return;
                    }
                    let v_36 = null;
                    let v_20 = equal_not(ce_arg, v_36);
                    if (v_20) {
                        let arguments_assert_arg = list_get(arguments_assert_args, ce_arg_index);
                        let c_arguments_assert_arg = list_get(c_arguments_assert_args, c_arg_index);
                        let v_35 = [
                            js_node_property_start(),
                            js_node_property_end()
                        ];
                        let identical = json_equal_keys_without(arguments_assert_arg, c_arguments_assert_arg, v_35);
                        let v_21 = not(identical);
                        if (v_21) {
                            list_set(c_arguments_assert_args, c_arg_index, arguments_assert_arg);
                            occurs = boolean_value_true();
                        }
                    }
                };
                list_each_with_index(ce_args, v_30);
            };
            js_visit_nodes_call_expression_name_equal(c_parsed, function_name, v_28);
            if (occurs) {
                await refactor_import_fix(c_args);
                list_add_if_not_exists(result, c_function_name);
            }
            let v_8 = not(occurs);
            return v_8;
        };
        await list_each_with_index_async(c_arguments_assert_args, v_24);
    }
    metadata([]);
}