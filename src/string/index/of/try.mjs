import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { string_is } from '../../is.mjs';
export function string_index_of_try(input, search) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v = input.indexOf(search);
    return v;
    metadata([]);
}