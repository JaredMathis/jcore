import { assert } from '../assert.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
import { number_is } from '../number/is.mjs';
export function list_set(list, index, value) {
    arguments_assert(arguments, [
        tautology,
        number_is,
        tautology
    ]);
    assert(object_property_exists(list, index));
    list[index] = value;
}