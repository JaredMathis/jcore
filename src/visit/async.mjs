import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { visit_recursive_async } from './recursive/async.mjs';
import { metadata } from '../metadata.mjs';
export async function visit_async(root, children_get, lambda_local) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    await visit_recursive_async(root, children_get, lambda_local, [], []);
    metadata([]);
}