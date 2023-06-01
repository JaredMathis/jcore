import { tautology } from './tautology.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { metadata_generated } from './metadata/generated.mjs';
import { metadata } from './metadata.mjs';
import { visit_recursive } from './visit/recursive.mjs';
export function visit(root, children_get, lambda_local) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    visit_recursive(root, children_get, lambda_local, [], []);
    metadata([metadata_generated()]);
}