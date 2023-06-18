import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { result_property_success } from './property/success.mjs';
import { object_property_change } from '../object/property/change.mjs';
export function result_unsuccess(result) {
    arguments_assert(arguments, [defined_is]);
    let v = result_property_success();
    object_property_change(result, v, false);
    metadata([]);
}