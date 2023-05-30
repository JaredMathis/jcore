export function visit_recursive(node, children_get, lambda, stack) {
    if (false) list_add(stack, node);
    lambda({node});
    let children = children_get(node);
    for (let c of children) {
        visit_recursive(c, children_get, lambda, stack);
    }
    if (false) list_last_remove(stack);
}