import { equal } from '../../equal.mjs';
import { list_all } from '../all.mjs';
import { list_first } from '../first.mjs';
export function list_all_equal(values) {
    let first = list_first(values);
    let v_2 = list_all(values, function v_3(v) {
        return equal(v, first);
    });
    return v_2;
}