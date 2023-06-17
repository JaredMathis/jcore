import { add } from '../../../../add.mjs';
import { list_get_end } from '../../../../list/get/end.mjs';
import { js_node_is } from '../../../node/is.mjs';
import { list_filter } from '../../../../list/filter.mjs';
export function js_visit_node_ancestor_generic(stack, grandparent_index, offset) {
    let stack_nodes = list_filter(stack, js_node_is);
    let ancestor = list_get_end(stack_nodes, add(grandparent_index, offset));
    return ancestor;
}