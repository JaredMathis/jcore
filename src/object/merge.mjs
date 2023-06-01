import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_set } from './property/set.mjs';
import { object_property_get } from './property/get.mjs';
import { object_keys } from './keys.mjs';
export function object_merge(from, to) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let property of object_keys(from)) {
        let value = object_property_get(from, property);
        object_property_set(to, property, value);
    }
    metadata([]);
}