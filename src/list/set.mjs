import { integer_value_0 } from '../integer/value/0.mjs';
import { list_is } from './is.mjs';
import { assert } from '../assert.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { number_is } from '../number/is.mjs';
import { list_length } from './length.mjs';
import { defined_is } from '../defined/is.mjs';
export function list_set(list, index, value) {
    arguments_assert(arguments, [
        list_is,
        number_is,
        defined_is
    ]);
    let v = index >= integer_value_0();
    assert(v);
    let v_2 = index <= list_length(list);
    assert(v_2);
    list[index] = value;
    return list;
}