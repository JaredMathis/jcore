import { boolean_value_false } from '../../boolean/value/false.mjs';
import { function_is } from '../../function/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { list_is } from '../../list/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { visit_recursive_ignore_duplicates_async } from './ignore/duplicates/async.mjs';
import { metadata } from '../../metadata.mjs';
export async function visit_recursive_async(node, children_get, lambda, stack, visited) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is,
        list_is,
        list_is
    ]);
    let ignore_duplicates = boolean_value_false();
    await visit_recursive_ignore_duplicates_async(node, children_get, lambda, stack, visited, ignore_duplicates);
    metadata([]);
}