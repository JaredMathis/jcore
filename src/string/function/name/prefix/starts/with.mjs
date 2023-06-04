import { string_is } from '../../../../is.mjs';
import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_function_name_prefix } from '../../prefix.mjs';
import { string_starts_with } from '../../../../starts/with.mjs';
export function string_function_name_prefix_starts_with(candidate, function_name) {
    arguments_assert(arguments, [
        string_is,
        tautology
    ]);
    return string_starts_with(candidate, string_function_name_prefix(function_name));
    metadata([]);
}