import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
export function string_function_name_prefix(function_name) {
    arguments_assert(arguments, [tautology]);
    return function_name + function_name_separator();
    metadata([]);
}