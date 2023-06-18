import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from './is.mjs';
import { defined_is } from '../defined/is.mjs';
export function list_contains(list, element) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    let v = list.includes(element);
    return v;
    metadata([]);
}