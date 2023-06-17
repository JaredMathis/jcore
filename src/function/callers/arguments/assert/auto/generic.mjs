import { changed } from '../../../../../changed.mjs';
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
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
comment(`Simplify this function - I don't understand it fully to guarantee it works through logical proof`);
export async function function_callers_arguments_assert_auto_generic(c_function_name, function_name, arguments_assert_args, result) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        list_is,
        list_is
    ]);
    if (equal(function_name, c_function_name)) {
        return;
    }
    await function_map_args(c_function_name, mapper);
    async function mapper(c_args) {
        let c_parsed = object_property_get(c_args, 'parsed');
        let c_function_declaration = object_property_get(c_args, 'function_declaration');
        let c_params = object_property_get(c_function_declaration, js_node_property_params());
        if (list_empty(c_params)) {
            return true;
        }
        let c_arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(c_function_declaration);
        await list_each_with_index_async(c_arguments_assert_args, async function lambda(c_arg, c_arg_index) {
            let c_param = list_get(c_params, c_arg_index);
            let c_param_name = object_property_get(c_param, js_node_property_name());
            comment(`If this isn't true then this code needs changing`);
            assert(js_node_is_identifier(c_arg));
            let c_predicate_name = object_property_get(c_arg, js_node_property_name());
            let default_name = function_name_get(arguments_assert_predicate_default());
            if (!equal(c_predicate_name, default_name)) {
                return false;
            }
            let changed = false;
            let assignment_exists = false;
            js_visit_nodes_filter(c_parsed, js_node_is_assignment_expression, v => {
                let {node} = v;
                let left = object_property_get(node, js_node_property_left());
                if (js_node_is_identifier(left)) {
                    if (object_property_get(left, 'name') === c_predicate_name) {
                        comment(`Value has been changed - will not assume predicate can be copied`);
                        assignment_exists = true;
                    }
                }
            });
            if (assignment_exists === true) {
                return changed;
            }
            js_visit_nodes_call_expression_name_equal(c_parsed, function_name, v => {
                let {node} = v;
                let ce_args = js_call_expression_arguments_get(node);
                list_each_with_index(ce_args, (ce_arg, ce_arg_index) => {
                    if (!js_node_is_identifier(ce_arg)) {
                        return;
                    }
                    const ce_arg_name = object_property_get(ce_arg, 'name');
                    if (!equal(c_param_name, ce_arg_name)) {
                        return;
                    }
                    if (ce_arg !== null) {
                        let arguments_assert_arg = list_get(arguments_assert_args, ce_arg_index);
                        let c_arguments_assert_arg = list_get(c_arguments_assert_args, c_arg_index);
                        let identical = json_equal_keys_without(arguments_assert_arg, c_arguments_assert_arg, [
                            js_node_property_start(),
                            js_node_property_end()
                        ]);
                        if (!identical) {
                            list_set(c_arguments_assert_args, c_arg_index, arguments_assert_arg);
                            changed = true;
                        }
                    }
                });
            });
            if (changed) {
                await refactor_import_fix(c_args);
                list_add_if_not_exists(result, c_function_name);
            }
            return !changed;
        });
    }
}