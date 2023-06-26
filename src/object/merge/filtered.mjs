import { metadata } from '../../metadata.mjs';
import { defined_is } from '../../defined/is.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_initialize } from '../property/initialize.mjs';
import { object_property_get } from '../property/get.mjs';
import { list_filter } from '../../list/filter.mjs';
import { object_keys } from '../keys.mjs';
export function object_merge_filtered(from, filter, to) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        defined_is
    ]);
    let keys = object_keys(from);
    let filterd = list_filter(keys, filter);
    for (let property of filterd) {
        let value = object_property_get(from, property);
        object_property_initialize(to, property, value);
    }
    return to;
    metadata([]);
}