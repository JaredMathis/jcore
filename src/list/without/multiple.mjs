import { not } from '../../not.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_contains } from '../contains.mjs';
import { list_filter } from '../filter.mjs';
export function list_without_multiple(list, values) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    let v_5 = function v_2(element) {
        let v_3 = list_contains(values, element);
        let v_4 = not(v_3);
        return v_4;
    };
    let v = list_filter(list, v_5);
    return v;
    metadata([]);
}