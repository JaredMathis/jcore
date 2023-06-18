import { equal } from '../../equal.mjs';
import { list_all } from '../all.mjs';
import { list_first } from '../first.mjs';
export function list_all_equal(values) {
    let first = list_first(values);
    return list_all(values, v => equal(v, first));
}