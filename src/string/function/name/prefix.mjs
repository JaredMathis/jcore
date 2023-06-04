import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { string_identifier_is } from '../../identifier/is.mjs';
export function string_function_name_prefix(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    return function_name + function_name_separator();
    metadata([]);
}