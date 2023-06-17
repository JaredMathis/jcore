import { js_node_property_name } from '../../js/node/property/name.mjs';
import { refactor_import_fix } from '../import/fix.mjs';
import { js_node_is_identifier } from '../../js/node/is/identifier.mjs';
import { js_node_property_callee } from '../../js/node/property/callee.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../js/visit/nodes/call/expression/name/equal.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_set } from '../../object/property/set.mjs';
export async function refactor_call_replace(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_name_called_old, function_name_called_new} = args;
    let {parsed} = args;
    js_visit_nodes_call_expression_name_equal(parsed, function_name_called_old, n => {
        let callee = object_property_get(n, js_node_property_callee());
        if (!(js_node_is_identifier(callee))) {
            return;
        }
        object_property_set(callee, js_node_property_name(), function_name_called_new);
    });
    await refactor_import_fix(args);
}