import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_contains } from './contains.mjs';
import { list_filter } from './filter.mjs';
export function list_intersection(left, right) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    let v = list_filter(left, function v_2(l) {
        let v_3 = list_contains(right, l);
        return v_3;
    });
    return v;
    metadata([]);
}