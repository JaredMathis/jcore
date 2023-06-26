import { error } from '../../../../../error.mjs';
import { js_node_property_right_get } from '../../../../../js/node/property/right/get.mjs';
import { js_node_property_left_get } from '../../../../../js/node/property/left/get.mjs';
import { js_node_property_arguments_get } from '../../../../../js/node/property/arguments/get.mjs';
import { equal } from '../../../../../equal.mjs';
import { js_node_property_operator_get } from '../../../../../js/node/property/operator/get.mjs';
import { js_node_is_binary_expression } from '../../../../../js/node/is/binary/expression.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { refactor_import_fix_if_changed } from '../../../../../refactor/import/fix/if/changed.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { js_mapper_args_to_function_name } from '../../../../../js/mapper/args/to/function/name.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { list_add } from '../../../../../list/add.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
export async function rule_equals_operator_to_function_call() {
    arguments_assert(arguments, []);
    const operator_value = '===';
    let equal_function_name = function_name_get(equal);
    await function_names_each_map(async function v(args) {
        let {parsed} = args;
        let function_name = js_mapper_args_to_function_name(args);
        if (equal(function_name, equal_function_name)) {
            return;
        }
        await refactor_import_fix_if_changed(args, async function v_2(changed) {
            js_nodes_each(parsed, js_node_is_binary_expression, function v_3(node) {
                let operator = js_node_property_operator_get(node);
                if (!equal(operator, operator_value)) {
                    return;
                }
                let ce = js_parse_call_expression(equal_function_name);
                let ce_args = js_node_property_arguments_get(ce);
                list_add(ce_args, js_node_property_left_get(node));
                list_add(ce_args, js_node_property_right_get(node));
                object_replace(node, ce);
                changed();
            });
        });
    });
}