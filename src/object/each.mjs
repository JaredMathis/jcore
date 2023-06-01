import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_get } from './property/get.mjs';
export function object_each(object, lambda) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let key in object) {
        let value = object_property_get(object, key);
        lambda(value, key);
    }
    metadata([]);
}