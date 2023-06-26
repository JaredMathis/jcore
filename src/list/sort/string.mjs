import { metadata } from '../../metadata.mjs';
import { string_compare } from '../../string/compare.mjs';
import { identity } from '../../identity.mjs';
import { list_sort_generic } from './generic.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_sort_string(list) {
    arguments_assert(arguments, [list_is]);
    let v = false;
    list_sort_generic(list, identity, v, string_compare);
    metadata([]);
}