export function visit(root, children_get, lambda) {
    lambda(root);
    let children = children_get(root);
    for (let c of children) {
        visit(c, children_get, lambda);
    }
}