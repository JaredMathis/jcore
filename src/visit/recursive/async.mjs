import { metadata } from '../../metadata.mjs';
import { list_last_remove_verify } from '../../list/last/remove/verify.mjs';
import { list_add_exists_not } from '../../list/add/exists/not.mjs';
import { list_last_or_null } from '../../list/last/or/null.mjs';
import { list_contains } from '../../list/contains.mjs';
export async function visit_recursive_async(node, children_get, lambda, stack) {
    let parent = list_last_or_null(stack);
    if (false) {
        // if (list_contains(stack, node)) {
        //     return;
        // }
    }
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