import { metadata } from '../metadata.mjs';
import { list_last_remove_verify } from '../list/last/remove/verify.mjs';
import { list_add_exists_not } from '../list/add/exists/not.mjs';
import { list_last_or_null } from '../list/last/or/null.mjs';
export function visit_recursive(node, children_get, lambda, stack) {
    let parent = list_last_or_null(stack);
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
    metadata([]);
}