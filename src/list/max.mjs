import { list_max_generic } from './max/generic.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { identity } from '../identity.mjs';
export function list_max(list) {
    arguments_assert(arguments, [list_is]);
    return list_max_generic(list, identity);
    metadata([]);
}