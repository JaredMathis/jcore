import { integer_value_0 } from '../integer/value/0.mjs';
import { list_skip } from './skip.mjs';
export function list_copy(refactor_stack) {
    let v_2 = integer_value_0();
    let v = list_skip(refactor_stack, v_2);
    return v;
}