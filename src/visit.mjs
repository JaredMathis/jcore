export function visit(root, children_get, lambda_local) {
    visit_recursive(root, children_get, lambda_local, []);
    metadata([metadata_generated()]);
}