import { value_get } from '../value/get.mjs';
import { subtract } from '../subtract.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_is } from './is.mjs';
import { identity } from '../identity.mjs';
export function list_sort(list) {
    arguments_assert(arguments, [list_is]);
    let value_get = identity;
    list.sort((a, b) => subtract(value_get(a), value_get(b)));
}