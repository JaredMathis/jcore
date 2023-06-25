import { integer_value_0 } from '../../../integer/value/0.mjs';
import { list_filter } from '../../filter.mjs';
import { function_is } from '../../../function/is.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_find_generic } from '../generic.mjs';
export function list_find_or_null(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let or_null = true;
    let result = list_find_generic(list, predicate, or_null, true, list_filter, integer_value_0());
    return result;
}