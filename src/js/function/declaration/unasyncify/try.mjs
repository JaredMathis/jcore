export function js_function_declaration_unasyncify_try(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    js_function_declaration_asyncify_generic(fd, object_property_set, true);
    metadata([]);
}