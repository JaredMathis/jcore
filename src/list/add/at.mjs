import { metadata } from '../../metadata.mjs';
import { list_index_valid } from '../index/valid.mjs';
import { assert } from '../../assert.mjs';
import { integer_is } from '../../integer/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { equal } from '../../equal.mjs';
import { list_length } from '../length.mjs';
export function list_add_at(list, value, index) {
    arguments_assert(arguments, [
        list_is,
        defined_is,
        integer_is
    ]);
    let v = list_index_valid(list, index) || equal(index, list_length(list));
    assert(v);
    const delete_count = 0;
    list.splice(index, delete_count, value);
    metadata([]);
}