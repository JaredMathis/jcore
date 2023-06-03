import { defined_is } from '../defined/is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_get } from './property/get.mjs';
import { object_keys } from './keys.mjs';
import { object_property_initialize } from './property/initialize.mjs';
import { list_filter } from '../list/filter.mjs';
export function object_merge(from, to) {
    arguments_assert(arguments, [
        defined_is,
        tautology
    ]);
    let filter = tautology;
    let keys = object_keys(from)
    let filterd = list_filter(keys, filter);
    for (let property of filterd) {
        let value = object_property_get(from, property);
        object_property_initialize(to, property, value);
    }
    metadata([]);
}