import { integer_is } from '../../integer/is.mjs';
import { list_first } from '../first.mjs';
import { list_length_is_1 } from '../length/is/1.mjs';
import { assert } from '../../assert.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_empty } from '../empty.mjs';
import { boolean_is } from '../../boolean/is.mjs';
export function list_find_generic(list, predicate, or_null, single, lambda_list_filter, index_after) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is,
        boolean_is,
        function_is,
        integer_is
    ]);
    let sub = list_sub;
    let filtered = lambda_list_filter(list, predicate);
    if (or_null) {
        if (list_empty(filtered)) {
            return null;
        }
    }
    if (single) {
        assert(list_length_is_1(filtered));
    }
    let result = list_first(filtered);
    return result;
}