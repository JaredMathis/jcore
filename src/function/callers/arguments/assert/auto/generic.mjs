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
        let c_parsed = object_property_get(c_args, 'parsed');
        let c_function_declaration = object_property_get(c_args, 'function_declaration');
        let v_2 = js_node_property_params();
        let c_params = object_property_get(c_function_declaration, v_2);
        let v_13 = list_empty(c_params);
        if (v_13) {
            return true;
        }
        let c_arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(c_function_declaration);
        await list_each_with_index_async(c_arguments_assert_args, async function lambda(c_arg, c_arg_index) {
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
            let v_14 = not(equal(c_predicate_name, default_name));
            if (v_14) {
                return false;
            }
            let occurs = false;
            let assignment_exists = false;
            js_visit_nodes_filter(c_parsed, js_node_is_assignment_expression, function v_9(v) {
                let {node} = v;
                let v_7 = js_node_property_left();
                let left = object_property_get(node, v_7);
                let v_15 = js_node_is_identifier(left);
                if (v_15) {
                    let v_16 = equal(object_property_get(left, 'name'), c_predicate_name);
                    if (v_16) {
                        comment(`Value has been changed - will not assume predicate can be copied`);
                        assignment_exists = true;
                    }
                }
            });
            let v_17 = equal(assignment_exists, true);
            if (v_17) {
                return occurs;
            }
            js_visit_nodes_call_expression_name_equal(c_parsed, function_name, function v_10(v) {
                let {node} = v;
                let ce_args = js_call_expression_arguments_get(node);
                list_each_with_index(ce_args, function v_11(ce_arg, ce_arg_index) {
                    let v_18 = not(js_node_is_identifier(ce_arg));
                    if (v_18) {
                        return;
                    }
                    const ce_arg_name = object_property_get(ce_arg, 'name');
                    let v_19 = not(equal(c_param_name, ce_arg_name));
                    if (v_19) {
                        return;
                    }
                    let v_20 = ce_arg !== null;
                    if (v_20) {
                        let arguments_assert_arg = list_get(arguments_assert_args, ce_arg_index);
                        let c_arguments_assert_arg = list_get(c_arguments_assert_args, c_arg_index);
                        let identical = json_equal_keys_without(arguments_assert_arg, c_arguments_assert_arg, [
                            js_node_property_start(),
                            js_node_property_end()
                        ]);
                        let v_21 = not(identical);
                        if (v_21) {
                            list_set(c_arguments_assert_args, c_arg_index, arguments_assert_arg);
                            occurs = true;
                        }
                    }
                });
            });
            if (occurs) {
                await refactor_import_fix(c_args);
                list_add_if_not_exists(result, c_function_name);
            }
            let v_8 = not(occurs);
            return v_8;
        });
    }
}