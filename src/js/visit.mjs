export function js_visit(parsed) {
    let body = js_body_get(parsed);
    visit_filter(
        body, node => object_properties(node), filter, lambda);
}