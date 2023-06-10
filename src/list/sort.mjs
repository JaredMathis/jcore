import { subtract } from '../subtract.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_is } from './is.mjs';
export function list_sort(removals) {
    arguments_assert(arguments, [list_is]);
    removals.sort((a, b) => subtract(a, b));
}