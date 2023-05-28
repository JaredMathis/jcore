export function js_node_is_type(node, type_expected) {
    const type_actual = node.type;
    return type_actual === type_expected
}