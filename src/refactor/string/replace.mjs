import { js_node_type_get } from '../../js/node/type/get.mjs';
import { js_visit_nodes_all } from '../../js/visit/nodes/all.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { list_new_then } from '../../list/new/then.mjs';
import { list_contains } from '../../list/contains.mjs';
export function refactor_string_replace(args) {
    arguments_assert(arguments, [defined_is]);
    let {string_value, replacement_function_name, parsed} = args;
    let types = list_new_then(list_then_add => {
        js_visit_nodes_all(parsed, v => {
            let {node} = v;
            let type = js_node_type_get(node);
            if (!list_contains(type)) {
                list_then_add(type);
            }
        });
    });
    return types;
}