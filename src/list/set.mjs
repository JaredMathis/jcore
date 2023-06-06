import { list_is } from './is.mjs';
import { assert } from '../assert.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
import { number_is } from '../number/is.mjs';
import { list_length } from './length.mjs';
export function list_set(list, index, value) {
    arguments_assert(arguments, [
        list_is,
        number_is,
        tautology
    ]);
    assert(index >= 0);
    assert(index <= list_length(list));
    list[index] = value;
}