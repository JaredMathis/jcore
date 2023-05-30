import { list_last } from '../list/last.mjs';
import { list_length } from '../list/length.mjs';
import { list_add_exists_not } from '../list/add/exists/not.mjs';
import { list_last_remove_verify } from '../list/last/remove/verify.mjs';
export function visit_recursive(node, children_get, lambda, stack) {
    let parent = null;
    if (false)
        if (list_length(stack) >= 1) {
            parent = list_last(stack);
        }
    list_add_exists_not(stack, node);
    lambda({
        node,
        parent
    });
    let children = children_get(node);
    for (let c of children) {
        visit_recursive(c, children_get, lambda, stack);
    }
    list_last_remove_verify(stack, node);
}