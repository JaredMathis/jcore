import { speed_property_previous_set } from './property/previous/set.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_add } from '../list/add.mjs';
import { speed_property_differences_get } from './property/differences/get.mjs';
import { subtract } from '../subtract.mjs';
import { speed_now } from './now.mjs';
import { speed_property_previous_get } from './property/previous/get.mjs';
export function speed_next(s) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let previous = speed_property_previous_get(s);
    let now = speed_now();
    let difference = subtract(now, previous);
    let differences = speed_property_differences_get(s);
    list_add(differences, difference);
    speed_property_previous_set(s, now);
    return differences;
}