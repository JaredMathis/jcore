export function visit_recursive(root, children_get, lambda, stack) {
    lambda(root);
    let children = children_get(root);
    for (let c of children) {
        visit_recursive(c, children_get, lambda, stack);
    }
}