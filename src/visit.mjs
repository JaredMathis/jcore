export function visit(root, children_get, lambda) {
    let success = lambda(root);
    if (!success) {
        return;
    }
    let children = children_get(root);
    for (let c of children) {
        visit(c, children_get, lambda);
    }
}