import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from './is.mjs';
import { defined_is } from '../defined/is.mjs';
export function list_add(list, element) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    list.push(element);
    metadata([]);
}