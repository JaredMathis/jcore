import { metadata } from '../metadata.mjs';
import { identity } from '../identity.mjs';
import { list_compare_generic } from './compare/generic.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_min(list) {
    arguments_assert(arguments, [list_is]);
    let compare = (current, found) => current < found;
    let v = list_compare_generic(list, identity, compare);
    return v;
    metadata([]);
}