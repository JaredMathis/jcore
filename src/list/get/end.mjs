import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { list_get } from '../get.mjs';
import { subtract } from '../../subtract.mjs';
import { list_last_index } from '../last/index.mjs';
import { assert } from '../../assert.mjs';
export function list_get_end(list, index_end) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = index_end >= integer_value_0();
    assert(v_2);
    let index_last = list_last_index(list);
    let index = subtract(index_last, index_end);
    let v = list_get(list, index);
    return v;
    metadata([]);
}