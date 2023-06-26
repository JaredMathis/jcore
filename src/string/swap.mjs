import { string_set } from './set.mjs';
import { string_get } from './get.mjs';
import { swap_generic } from '../swap/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
import { integer_is } from '../integer/is.mjs';
export function string_swap(list, index_from, index_to) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        integer_is
    ]);
    let generic_get = string_get;
    let generic_set = string_set;
    let v = swap_generic(generic_get, generic_set, list, index_from, index_to);
    return v;
    metadata([]);
}