export function js_identifier_counts(parsed) {
    let result = [];
    let body = js_body_get(parsed);
    visit_filter(body, node => object_properties(node), node => js_node_is(node) && js_node_is_identifier(node), node => {
        let r = object_property_get(node, 'name');
        array_add(result, r);
    });
    return result;
}