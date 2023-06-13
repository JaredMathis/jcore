import { metadata } from '../../metadata.mjs';
import { list_index_valid } from '../index/valid.mjs';
import { assert } from '../../assert.mjs';
import { integer_is } from '../../integer/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function list_add_at(list, index, value) {
    arguments_assert(arguments, [
        list_is,
        integer_is,
        defined_is
    ]);
    assert(list_index_valid(list, index));
    const delete_count = 0;
    list.splice(index, delete_count, value);
    metadata([]);
}