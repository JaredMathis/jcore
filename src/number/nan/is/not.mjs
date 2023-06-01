import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
export function number_nan_is_not(result) {
    arguments_assert(arguments, [tautology]);
    return !isNaN(result);
    metadata([]);
}