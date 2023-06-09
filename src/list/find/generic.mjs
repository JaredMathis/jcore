import { metadata } from '../../metadata.mjs';
import { integer_is } from '../../integer/is.mjs';
import { list_first } from '../first.mjs';
import { list_length_is_1 } from '../length/is/1.mjs';
import { assert } from '../../assert.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_empty } from '../empty.mjs';
import { boolean_is } from '../../boolean/is.mjs';
import { list_skip } from '../skip.mjs';
export function list_find_generic(list, predicate, or_null, single, lambda_list_filter, index_starting_at) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is,
        boolean_is,
        function_is,
        integer_is
    ]);
    let skipped = list_skip(list, index_starting_at);
    let filtered = lambda_list_filter(skipped, predicate);
    if (or_null) {
        let v_2 = list_empty(filtered);
        if (v_2) {
            return null;
        }
    }
    if (single) {
        let v = list_length_is_1(filtered);
        assert(v);
    }
    let result = list_first(filtered);
    return result;
    metadata([]);
}