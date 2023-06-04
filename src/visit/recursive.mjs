import { list_is } from '../list/is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { visit_recursive_ignore_duplicates } from './recursive/ignore/duplicates.mjs';
export function visit_recursive(node, children_get, lambda, stack, visited) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology,
        list_is,
        tautology
    ]);
    let ignore_duplicates = false;
    visit_recursive_ignore_duplicates(node, children_get, lambda, stack, visited, ignore_duplicates);
    metadata([metadata_generated()]);
}