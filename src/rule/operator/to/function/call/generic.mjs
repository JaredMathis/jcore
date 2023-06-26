import { metadata } from '../../../../../metadata.mjs';
import { metadata_rule_operator_to_function_call_none } from '../../../../../metadata/rule/operator/to/function/call/none.mjs';
import { js_mapper_args_to_metadata_args_contains } from '../../../../../js/mapper/args/to/metadata/args/contains.mjs';
import { log } from '../../../../../log.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { js_node_property_right_get } from '../../../../../js/node/property/right/get.mjs';
import { js_node_property_left_get } from '../../../../../js/node/property/left/get.mjs';
import { list_add } from '../../../../../list/add.mjs';
import { js_node_property_arguments_get } from '../../../../../js/node/property/arguments/get.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { js_node_property_operator_get } from '../../../../../js/node/property/operator/get.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { refactor_import_fix_if_changed } from '../../../../../refactor/import/fix/if/changed.mjs';
import { equal } from '../../../../../equal.mjs';
import { js_mapper_args_to_function_name } from '../../../../../js/mapper/args/to/function/name.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { function_dependencies_names } from '../../../../../function/dependencies/names.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
export async function rule_operator_to_function_call_generic(operator_function, operator_value, node_type) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let operator_function_name = function_name_get(operator_function);
    let dependencies = await function_dependencies_names(operator_function_name);
    await function_names_each_map(async function v(args) {
        let {parsed} = args;
        let function_name = js_mapper_args_to_function_name(args);
        if (list_contains(dependencies, function_name)) {
            return;
        }
        if (js_mapper_args_to_metadata_args_contains(args, metadata_rule_operator_to_function_call_none)) {
            return;
        }
        await refactor_import_fix_if_changed(args, async function v_2(changed) {
            js_nodes_each(parsed, function v_4(n) {
                try {
                    return node_type(n);
                } catch (e) {
                    console.log({ n });
                    throw e;
                }
            }, function v_3(node) {
                let operator = js_node_property_operator_get(node);
                if (!equal(operator, operator_value)) {
                    return;
                }
                let ce = js_parse_call_expression(operator_function_name);
                let ce_args = js_node_property_arguments_get(ce);
                list_add(ce_args, js_node_property_left_get(node));
                list_add(ce_args, js_node_property_right_get(node));
                object_replace(node, ce);
                changed();
            });
        });
    });
    metadata([]);
}