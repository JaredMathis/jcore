import { equal } from '../../../equal.mjs';
import { list_all } from '../../all.mjs';
import { list_first } from '../../first.mjs';
export function list_elements_all_equal(values) {
    let first = list_first(values);
    let list_all_equal = list_all(values, function list_all_each(v) {
        let v_4 = equal(v, first);
        return v_4;
    });
    return list_all_equal;
}