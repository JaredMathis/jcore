import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { metadata } from '../../metadata.mjs';
import { list_index_valid } from '../index/valid.mjs';
import { assert } from '../../assert.mjs';
import { integer_is } from '../../integer/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_add_at(list, index, value) {
    arguments_assert(arguments, [
        list_is,
        integer_is,
        arguments_assert_todo
    ]);
    assert(list_index_valid(list, index));
    const delete_count = 0;
    list.splice(index, delete_count);
    metadata([]);
}