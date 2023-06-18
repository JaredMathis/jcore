import { js_nodes_each } from './each.mjs';
import { list_adder } from '../../list/adder.mjs';
export function js_nodes_get(parsed, predicate) {
    let v = list_adder(function v_2(list_new_then_add) {
        js_nodes_each(parsed, predicate, list_new_then_add);
    });
    return v;
}