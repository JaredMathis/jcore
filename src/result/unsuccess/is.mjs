import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { result_property_success_get } from '../property/success/get.mjs';
import { not } from '../../not.mjs';
export function result_unsuccess_is(result) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = result_property_success_get(result);
    let v_2 = not(v);
    return v_2;
    metadata([]);
}