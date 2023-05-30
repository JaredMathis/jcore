import { list_contains } from '../list/contains.mjs';
import { list_last_remove_verify } from '../list/last/remove/verify.mjs';
import { list_add } from '../list/add.mjs';
import { assert } from '../assert.mjs';
export function visit_recursive(node, children_get, lambda, stack) {
    if (false)
        assert(list_contains(stack, node));
    list_add(stack, node);
    lambda({
        node,
        stack
    });
    let children = children_get(node);
    for (let c of children) {
        visit_recursive(c, children_get, lambda, stack);
    }
    list_last_remove_verify(stack, node);
}