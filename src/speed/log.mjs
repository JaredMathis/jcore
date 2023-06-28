import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { log } from '../log.mjs';
import { speed_property_differences_get } from './property/differences/get.mjs';
export function speed_log(s) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let differences = speed_property_differences_get(s);
    log(differences);
    metadata([]);
}