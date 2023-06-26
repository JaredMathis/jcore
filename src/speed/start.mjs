import { metadata } from '../metadata.mjs';
import { speed_property_differences_set } from './property/differences/set.mjs';
import { speed_now } from './now.mjs';
import { speed_property_previous_set } from './property/previous/set.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function speed_start() {
    arguments_assert(arguments, []);
    let result = {};
    speed_property_differences_set(result, []);
    let v = speed_now();
    speed_property_previous_set(result, v);
    return result;
    metadata([]);
}