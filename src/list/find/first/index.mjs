import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { integer_value_0 } from '../../../integer/value/0.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_filter_index } from '../../filter/index.mjs';
import { list_find_generic } from '../generic.mjs';
import { function_is } from '../../../function/is.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function list_find_first_index(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let or_null = boolean_value_false();
    let v_2 = boolean_value_false();
    let v_3 = integer_value_0();
    let v = list_find_generic(list, predicate, or_null, v_2, list_filter_index, v_3);
    return v;
    metadata([]);
}