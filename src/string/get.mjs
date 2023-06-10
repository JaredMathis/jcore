import { object_property_exists } from '../object/property/exists.mjs';
import { assert } from '../assert.mjs';
import { integer_is } from '../integer/is.mjs';
import { list_is } from '../list/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function string_get(list, index) {
    arguments_assert(arguments, [
        list_is,
        integer_is
    ]);
    assert(object_property_exists(list, index));
    return list[index];
}