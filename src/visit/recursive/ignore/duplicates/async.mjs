import { list_is } from '../../../../list/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_remove_last_verify } from '../../../../list/remove/last/verify.mjs';
import { list_add_assert_exists_not } from '../../../../list/add/assert/exists/not.mjs';
import { list_add } from '../../../../list/add.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_last_or_null } from '../../../../list/last/or/null.mjs';
import { function_is } from '../../../../function/is.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { metadata } from '../../../../metadata.mjs';
export async function visit_recursive_ignore_duplicates_async(node, children_get, lambda, stack, visited, ignore_duplicates) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is,
        list_is,
        list_is,
        boolean_is
    ]);
    let parent = list_last_or_null(stack);
    if (ignore_duplicates) {
        let v = list_contains(visited, node);
        if (v) {
            return;
        }
        list_add(visited, node);
    }
    list_add_assert_exists_not(stack, node);
    await lambda({
        node,
        parent,
        stack
    });
    let children = await children_get(node);
    for (let c of children) {
        await visit_recursive_ignore_duplicates_async(c, children_get, lambda, stack, visited, ignore_duplicates);
    }
    list_remove_last_verify(stack, node);
    metadata([]);
}