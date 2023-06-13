import { js_nodes_each } from './each.mjs';
import { list_new_then } from '../../list/new/then.mjs';
export function js_nodes_get(parsed, predicate) {
    return list_new_then(list_new_then_add => {
        js_nodes_each(parsed, predicate, list_new_then_add);
    });
}