import { speed_property_previous_set } from './property/previous/set.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function speed_start() {
    arguments_assert(arguments, []);
    let result = {};
    speed_property_previous_set(result, performance.now());
    return result;
}