import { log } from '../../log.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_node_property_callee } from '../../js/node/property/callee.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../js/visit/nodes/call/expression/name/equal.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { changed } from '../../changed.mjs';
export function refactor_call_find(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_name} = args;
    let {parsed} = args;
    if (changed(c => {
        js_visit_nodes_call_expression_name_equal(parsed, function_name, function v_3(n) {
            c();
        });
    })) {
        let function_name_caller = 
    }
}