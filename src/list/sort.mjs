import { boolean_value_false } from '../boolean/value/false.mjs';
import { metadata } from '../metadata.mjs';
import { subtract } from '../subtract.mjs';
import { list_sort_generic } from './sort/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_is } from './is.mjs';
import { identity } from '../identity.mjs';
export function list_sort(list) {
    arguments_assert(arguments, [list_is]);
    let v = boolean_value_false();
    list_sort_generic(list, identity, v, subtract);
    metadata([]);
}