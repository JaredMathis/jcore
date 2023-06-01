import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_length } from '../../length.mjs';
export function list_length_is_value(list, value) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return list_length(list) === value;
    metadata([]);
}