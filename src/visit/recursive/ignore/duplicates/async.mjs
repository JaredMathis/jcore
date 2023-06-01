import { list_last_remove_verify } from '../../../../list/last/remove/verify.mjs';
import { visit_recursive_async } from '../../async.mjs';
import { list_add_exists_not } from '../../../../list/add/exists/not.mjs';
import { list_add } from '../../../../list/add.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_last_or_null } from '../../../../list/last/or/null.mjs';
export async function visit_recursive_ignore_duplicates_async(node, children_get, lambda, stack, visited, ignore_duplicates) {
    let parent = list_last_or_null(stack);
    if (ignore_duplicates) {
        if (list_contains(visited, node)) {
            return;
        }
        list_add(visited, node);
    }
    list_add_exists_not(stack, node);
    await lambda({
        node,
        parent
    });
    let children = children_get(node);
    for (let c of children) {
        await visit_recursive_ignore_duplicates_async(c, children_get, lambda, stack, visited, ignore_duplicates);
    }
    list_last_remove_verify(stack, node);
}