import { integer_is } from '../../integer/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { list_index_valid } from '../index/valid.mjs';
export function list_remove_at(list, index) {
    arguments_assert(arguments, [
        list_is,
        integer_is
    ]);
    let v = list_index_valid(list, index);
    assert(v);
    const delete_count = 1;
    list.splice(index, delete_count);
    metadata([]);
}