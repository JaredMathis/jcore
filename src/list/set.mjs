import { assert } from '../assert.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
export function list_set(list, index, value) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    assert(object_property_exists(list, index));
    list[index] = value;
}