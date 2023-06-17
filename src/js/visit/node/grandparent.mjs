import { add } from '../../../add.mjs';
import { list_get_end } from '../../../list/get/end.mjs';
import { js_node_is } from '../../node/is.mjs';
import { list_filter } from '../../../list/filter.mjs';
export function js_visit_node_grandparent(stack, grandparent_index) {
    const offset = 2;
    let stack_nodes = list_filter(stack, js_node_is);
    let grandparent = list_get_end(stack_nodes, add(grandparent_index, offset));
    return grandparent;
}