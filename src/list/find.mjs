import { boolean_value_true } from '../boolean/value/true.mjs';
import { boolean_value_false } from '../boolean/value/false.mjs';
import { integer_value_0 } from '../integer/value/0.mjs';
import { list_filter } from './filter.mjs';
import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_find_generic } from './find/generic.mjs';
import { metadata } from '../metadata.mjs';
export function list_find(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let or_null = boolean_value_false();
    let v_2 = boolean_value_true();
    let v_3 = integer_value_0();
    let v = list_find_generic(list, predicate, or_null, v_2, list_filter, v_3);
    return v;
    metadata([]);
}