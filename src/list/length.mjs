import { list_property_length } from './property/length.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { list_is } from './is.mjs';
export function list_length(list) {
    arguments_assert(arguments, [list_is]);
    return object_property_get(list, list_property_length());
    metadata([]);
}