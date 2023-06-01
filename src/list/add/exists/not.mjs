import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_add } from '../../add.mjs';
import { list_contains } from '../../contains.mjs';
import { assert } from '../../../assert.mjs';
export function list_add_exists_not(stack, node) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    assert(!list_contains(stack, node));
    list_add(stack, node);
    metadata([]);
}