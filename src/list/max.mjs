import { list_compare_generic } from './compare/generic.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { identity } from '../identity.mjs';
export function list_max(list) {
    arguments_assert(arguments, [list_is]);
    let compare = (current, found) => current > found;
    return list_compare_generic(list, identity, compare);
    metadata([]);
}