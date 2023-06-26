import { boolean_value_false } from '../boolean/value/false.mjs';
import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { visit_recursive_ignore_duplicates } from './recursive/ignore/duplicates.mjs';
import { list_is } from '../list/is.mjs';
import { function_is } from '../function/is.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function visit_recursive(node, children_get, lambda, stack, visited) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is,
        list_is,
        list_is
    ]);
    let ignore_duplicates = boolean_value_false();
    visit_recursive_ignore_duplicates(node, children_get, lambda, stack, visited, ignore_duplicates);
    metadata([metadata_generated()]);
}