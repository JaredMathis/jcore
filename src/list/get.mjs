import { integer_is } from '../integer/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
import { list_is } from './is.mjs';
export function list_get(list, index) {
    arguments_assert(arguments, [
        list_is,
        integer_is
    ]);
    let v = object_property_exists(list, index);
    assert(v);
    return list[index];
    metadata([]);
}