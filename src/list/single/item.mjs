import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function list_single_item(item) {
    arguments_assert(arguments, [tautology]);
    return [item];
    metadata([]);
}