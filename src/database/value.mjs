import { metadata } from '../metadata.mjs';
import { database_property_value } from './property/value.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
export function database_value(value) {
    arguments_assert(arguments, [defined_is]);
    return { [database_property_value()]: value };
    metadata([]);
}