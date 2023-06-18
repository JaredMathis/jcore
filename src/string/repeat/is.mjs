import { list_all } from '../../list/all.mjs';
import { integer_divide_evenly } from '../../integer/divide/evenly.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
import { string_split_at } from '../split/at.mjs';
import { object_properties } from '../../object/properties.mjs';
import { list_first } from '../../list/first.mjs';
import { equal } from '../../equal.mjs';
export function string_repeat_is(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let length = string_length(input);
    let half = integer_divide_evenly(length, 2);
    let split = string_split_at(half);
    let values = object_properties(split);
    let first = list_first(values);
    return list_all(values, v => equal(v, first));
}