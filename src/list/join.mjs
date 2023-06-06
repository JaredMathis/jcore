import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from './is.mjs';
import { string_is } from '../string/is.mjs';
export function list_join(list, separator) {
    arguments_assert(arguments, [
        list_is,
        string_is
    ]);
    return list.join(separator);
    metadata([]);
}