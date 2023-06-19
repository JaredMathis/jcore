import { equal } from '../../../equal.mjs';
import { list_all } from '../../all.mjs';
import { list_first } from '../../first.mjs';
export function list_elements_all_equal(values) {
    let lambda = equal;
    let first = list_first(values);
    let list_all_equal = list_all(values, function list_all_each(v) {
        let e = lambda(v, first);
        return e;
    });
    return list_all_equal;
}