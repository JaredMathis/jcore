import { arguments_assert_predicate_default_name_equal } from '../../../../../arguments/assert/predicate/default/name/equal.mjs';
import { refactor_import_fix_if_changed } from '../../../../../refactor/import/fix/if/changed.mjs';
import { js_visit_assignment_exists } from '../../../../../js/visit/assignment/exists.mjs';
import { js_node_property_name_get } from '../../../../../js/node/property/name/get.mjs';
import { js_mapper_args_property_params_get } from '../../../../../js/mapper/args/property/params/get.mjs';
import { js_mapper_args_property_function_declaration_get } from '../../../../../js/mapper/args/property/function/declaration/get.mjs';
import { js_mapper_args_property_parsed_get } from '../../../../../js/mapper/args/property/parsed/get.mjs';
import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { equal_not } from '../../../../../equal/not.mjs';
import { not } from '../../../../../not.mjs';
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
import { list_set } from '../../../../../list/set.mjs';
import { list_get } from '../../../../../list/get.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
import { assert } from '../../../../../assert.mjs';
import { list_each_with_index_async } from '../../../../../list/each/with/index/async.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../../../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { list_empty } from '../../../../../list/empty.mjs';
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
        let c_parsed = js_mapper_args_property_parsed_get(c_args);
        let c_function_declaration = js_mapper_args_property_function_declaration_get(c_args);
        let c_params = js_mapper_args_property_params_get(c_function_declaration);
        let v_13 = list_empty(c_params);
        if (v_13) {
            let v_37 = boolean_value_true();
            return v_37;
        }
        let c_arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(c_function_declaration);
        let v_24 = async function c_arguments_assert_args_each(c_arg, c_arg_index) {
            let c_param = list_get(c_params, c_arg_index);
            let c_param_name = js_node_property_name_get(c_param);
            comment(`If this isn't true then this code needs changing`);
            let v_4 = js_node_is_identifier(c_arg);
            assert(v_4);
            let c_predicate_name = js_node_property_name_get(c_arg);
            let v_25 = arguments_assert_predicate_default_name_equal(c_predicate_name);
            let v_14 = not(v_25);
            if (v_14) {
                let v_38 = boolean_value_false();
                return v_38;
            }
            comment(`Value has been changed through assignment - will not assume predicate can be copied`);
            let assignment_exists = js_visit_assignment_exists(c_parsed, c_predicate_name);
            if (assignment_exists) {
                return boolean_value_false();
            }
            let occurs_result = await refactor_import_fix_if_changed(c_args, function v_2(o) {
                let v_28 = function v_10(v) {
                    let {node} = v;
                    let ce_args = js_call_expression_arguments_get(node);
                    let v_30 = function v_11(ce_arg, ce_arg_index) {
                        let v_32 = js_node_is_identifier(ce_arg);
                        let v_18 = not(v_32);
                        if (v_18) {
                            return;
                        }
                        const ce_arg_name = js_node_property_name_get(ce_arg);
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
                                o();
                            }
                        }
                    };
                    list_each_with_index(ce_args, v_30);
                };
                js_visit_nodes_call_expression_name_equal(c_parsed, function_name, v_28);
            });
            if (occurs_result) {
                list_add_if_not_exists(result, c_function_name);
            }
            let v_8 = not(occurs_result);
            return v_8;
        };
        await list_each_with_index_async(c_arguments_assert_args, v_24);
    }
    metadata([]);
}