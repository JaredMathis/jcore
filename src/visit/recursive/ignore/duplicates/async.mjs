import { list_is } from '../../../../list/is.mjs';
import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_last_remove_verify } from '../../../../list/last/remove/verify.mjs';
import { list_add_exists_not } from '../../../../list/add/exists/not.mjs';
import { list_add } from '../../../../list/add.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_last_or_null } from '../../../../list/last/or/null.mjs';
import { js_node_is } from '../../../../js/node/is.mjs';
import { function_is } from '../../../../function/is.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
export async function visit_recursive_ignore_duplicates_async(node, children_get, lambda, stack, visited, ignore_duplicates) {
    arguments_assert(arguments, [
        js_node_is,
        function_is,
        function_is,
        list_is,
        list_is,
        boolean_is
    ]);
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
    let children = await children_get(node);
    for (let c of children) {
        await visit_recursive_ignore_duplicates_async(c, children_get, lambda, stack, visited, ignore_duplicates);
    }
    list_last_remove_verify(stack, node);
}