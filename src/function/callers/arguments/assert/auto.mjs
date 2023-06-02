import { refactor_import_fix } from '../../../../refactor/import/fix.mjs';
import { js_node_property_left } from '../../../../js/node/property/left.mjs';
import { object_property_change } from '../../../../object/property/change.mjs';
import { js_mapper_args_to_statement_arguments_assert_args_predicate } from '../../../../js/mapper/args/to/statement/arguments/assert/args/predicate.mjs';
import { function_parse_to_declaration } from '../../../parse/to/declaration.mjs';
import { list_index_of } from '../../../../list/index/of.mjs';
import { js_node_is_call_expression } from '../../../../js/node/is/call/expression.mjs';
import { js_node_is_assignment_expression } from '../../../../js/node/is/assignment/expression.mjs';
import { list_each_with_index_async } from '../../../../list/each/with/index/async.mjs';
import { arguments_assert_predicate_default } from '../../../../arguments/assert/predicate/default.mjs';
import { js_node_property_name } from '../../../../js/node/property/name.mjs';
import { js_node_property_arguments } from '../../../../js/node/property/arguments.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_callers } from '../../../callers.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { equal } from '../../../../equal.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_property_params } from '../../../../js/node/property/params.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { assert } from '../../../../assert.mjs';
import { js_node_is_identifier } from '../../../../js/node/is/identifier.mjs';
import { comment } from '../../../../comment.mjs';
import { list_get } from '../../../../list/get.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { js_visit_nodes } from '../../../../js/visit/nodes.mjs';
import { js_call_expression_to_name_or_null } from '../../../../js/call/expression/to/name/or/null.mjs';
import { list_map } from '../../../../list/map.mjs';
import { file_js_map_args } from '../../../../file/js/map/args.mjs';
import { function_name_to_file_path } from '../../../name/to/file/path.mjs';
export async function function_callers_arguments_assert_auto(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_declaration = await function_parse_to_declaration(function_name);
    let arguments_assert_args = await js_mapper_args_to_statement_arguments_assert_args_predicate(function_declaration);
    let callers = await function_callers(function_name);
    for (let c_function_name of callers) {
        if (equal(function_name, c_function_name)) {
            continue;
        }
        let file_path = function_name_to_file_path(c_function_name);
        await file_js_map_args(file_path, async c_args => {
            let c_parsed = object_property_get(c_args, 'parsed');
            let c_function_declaration = object_property_get(c_args, 'function_declaration');
            let c_params = object_property_get(c_function_declaration, js_node_property_params());
            if (list_length_is_0(c_params)) {
                return true;
            }
            let c_params_names = list_map(c_params, p => object_property_get(p, 'name'));
            let c_arguments_assert_args = await js_mapper_args_to_statement_arguments_assert_args_predicate(c_function_declaration);
            await list_each_with_index_async(c_arguments_assert_args, async function lambda(c_arg, index) {
                comment(`If this isn't true then this code needs changing`);
                assert(js_node_is_identifier(c_arg));
                let predicate_name = object_property_get(c_arg, js_node_property_name());
                let default_name = function_name_get(arguments_assert_predicate_default());
                if (!equal(predicate_name, default_name)) {
                    return false;
                }
                let changed = false;
                let assignment_exists = false;
                js_visit_nodes(c_parsed, js_node_is_assignment_expression, v => {
                    let {node} = v;
                    let left = object_property_get(node, js_node_property_left());
                    if (js_node_is_identifier(left)) {
                        if (object_property_get(left, 'name') === predicate_name) {
                            comment(`Value has been changed - will not assume predicate can be copied`);
                            assignment_exists = true;
                        }
                    }
                });
                if (assignment_exists === true) {
                    return changed;
                }
                js_visit_nodes(c_parsed, js_node_is_call_expression, v => {
                    let {node} = v;
                    let ce_name = js_call_expression_to_name_or_null(node);
                    if (ce_name !== null) {
                        if (equal(ce_name, function_name)) {
                            let ce_args = object_property_get(node, js_node_property_arguments());
                            let ce_arg_for_arg = list_get(ce_args, index);
                            let ce_arg_for_arg_name = object_property_get(ce_arg_for_arg, 'name');
                            let params_index = list_index_of(c_params_names, ce_arg_for_arg_name);
                            let arguments_assert_arg = list_get(arguments_assert_args, params_index);
                            object_property_change(c_arguments_assert_args, index, arguments_assert_arg);
                            changed = true;
                        }
                    }
                });
                if (changed) {
                    console.log({c_args: c_arguments_assert_args})
                    await refactor_import_fix(c_arguments_assert_args);
                }
                return !changed;
            });
        });
    }
}