import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_split } from '../../split.mjs';
import { string_is } from '../../is.mjs';
export function string_identifier_multiple_parse(values) {
    arguments_assert(arguments, [string_is]);
    let result = string_split(values, ',');
    return result;
}