export function visit_recursive(node, children_get, lambda, stack) {
    lambda({node});
    let children = children_get(node);
    for (let c of children) {
        visit_recursive(c, children_get, lambda, stack);
    }
}