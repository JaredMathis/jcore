import { list_take } from '../../take.mjs';
import { list_length_subtract_1 } from '../../length/subtract/1.mjs';
export function list_take_without_last(statements) {
    let v = list_length_subtract_1(statements);
    let remaining = list_take(statements, v);
    return remaining;
}