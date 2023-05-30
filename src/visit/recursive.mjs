import { assert } from '../assert.mjs';
import { list_last_remove } from '../list/last/remove.mjs';
import { list_add } from '../list/add.mjs';
export function visit_recursive(node, children_get, lambda, stack) {
    list_add(stack, node);
    lambda({ node });
    let children = children_get(node);
    for (let c of children) {
        visit_recursive(c, children_get, lambda, stack);
    }
    let last = list_last_remove(stack);
    if (false)
        assert(node === last);
}