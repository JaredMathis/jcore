import { string_identifier_is } from '../../../../identifier/is.mjs';
import { string_is } from '../../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_function_name_prefix } from '../../prefix.mjs';
import { string_starts_with } from '../../../../starts/with.mjs';
export function string_function_name_prefix_starts_with(candidate, function_name) {
    arguments_assert(arguments, [
        string_is,
        string_identifier_is
    ]);
    let v = string_function_name_prefix(function_name);
    let v_2 = string_starts_with(candidate, v);
    return v_2;
    metadata([]);
}