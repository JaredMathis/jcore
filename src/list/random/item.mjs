import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { multiply } from '../../multiply.mjs';
import { metadata } from '../../metadata.mjs';
import { list_get } from '../get.mjs';
import { number_floor } from '../../number/floor.mjs';
import { list_length } from '../length.mjs';
import { random_get } from '../../random/get.mjs';
export function list_random_item(values) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let random = random_get();
    let length = list_length(values);
    let v = multiply(random, length);
    let index = number_floor(v);
    let value = list_get(values, index);
    return value;
    metadata([]);
}