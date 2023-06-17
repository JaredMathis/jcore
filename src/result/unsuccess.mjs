import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { result_success } from './success.mjs';
import { object_property_set } from '../object/property/set.mjs';
import { object_property_change } from '../object/property/change.mjs';
export function result_unsuccess(result) {
    arguments_assert(arguments, [defined_is]);
    object_property_change(result, result_success(), false);
    metadata([]);
}