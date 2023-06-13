import { list_contains } from '../../../../list/contains.mjs';
import { js_node_type_get } from '../../../node/type/get.mjs';
import { js_visit_nodes_all } from '../all.mjs';
import { list_new_then } from '../../../../list/new/then.mjs';
import { list_add } from '../../../../list/add.mjs';
export function js_visit_nodes_types_get(parsed) {
    let found = [];
    let types = list_new_then(list_then_add => {
        js_visit_nodes_all(parsed, v => {
            let {node} = v;
            let type = js_node_type_get(node);
            if (!list_contains(found, type)) {
                list_then_add(type);
                list_add(found, type);
            }
        });
    });
    return types;
}