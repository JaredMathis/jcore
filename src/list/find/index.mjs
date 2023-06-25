import { integer_value_0 } from '../../integer/value/0.mjs';
import { list_filter_index } from '../filter/index.mjs';
import { metadata } from '../../metadata.mjs';
import { list_find_generic } from './generic.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_find_index(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let or_null = false;
    let v = list_find_generic(list, predicate, or_null, true, list_filter_index, integer_value_0());
    return v;
    metadata([]);
}