import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../../string/is.mjs';
export function integer_parse_try(input) {
    arguments_assert(arguments, [string_is]);
    return parseInt(input, 10);
    metadata([]);
}