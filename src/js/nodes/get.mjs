import { js_nodes_each } from './each.mjs';
import { list_adder } from '../../list/adder.mjs';
export function js_nodes_get(parsed, predicate) {
    return list_adder(list_new_then_add => {
        js_nodes_each(parsed, predicate, list_new_then_add);
    });
}