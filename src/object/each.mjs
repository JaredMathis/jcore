import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_get } from './property/get.mjs';
import { defined_is } from '../defined/is.mjs';
import { function_is } from '../function/is.mjs';
export function object_each(object, lambda) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    for (let key in object) {
        let value = object_property_get(object, key);
        lambda(value, key);
    }
    metadata([]);
}