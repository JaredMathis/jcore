export async function visit_recursive(node, children_get, lambda, stack) {
    let parent = list_last_or_null(stack);
    list_add_exists_not(stack, node);
    await lambda({
        node,
        parent
    });
    let children = children_get(node);
    for (let c of children) {
        await visit_recursive_async(c, children_get, lambda, stack);
    }
    list_last_remove_verify(stack, node);
    metadata([]);
}