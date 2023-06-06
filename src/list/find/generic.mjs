import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_single } from '../single.mjs';
import { list_length_is_0 } from '../length/is/0.mjs';
import { list_filter } from '../filter.mjs';
import { boolean_is } from '../../boolean/is.mjs';
export function list_find_generic(list, predicate, or_null) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is
    ]);
    let filtered = list_filter(list, predicate);
    if (or_null) {
        if (list_length_is_0(filtered)) {
            return null;
        }
    }
    return list_single(filtered);
}