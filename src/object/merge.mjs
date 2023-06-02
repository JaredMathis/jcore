import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_get } from './property/get.mjs';
import { object_keys } from './keys.mjs';
import { object_property_initialize } from './property/initialize.mjs';
export function object_merge(from, to) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let property of object_keys(from)) {
        let value = object_property_get(from, property);
        object_property_initialize(to, property, value);
    }
    metadata([]);
}