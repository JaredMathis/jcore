import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_filter_index } from '../../../filter/index.mjs';
import { list_find_generic } from '../../generic.mjs';
import { function_is } from '../../../../function/is.mjs';
import { list_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function list_find_first_index_after(list, predicate, index_starting_at) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        arguments_assert_todo
    ]);
    let or_null = false;
    return list_find_generic(list, predicate, or_null, false, list_filter_index, 0);
    metadata([]);
}