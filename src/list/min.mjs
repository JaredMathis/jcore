import { less_than } from '../less/than.mjs';
import { metadata } from '../metadata.mjs';
import { identity } from '../identity.mjs';
import { list_compare_generic } from './compare/generic.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_min(list) {
    arguments_assert(arguments, [list_is]);
    let compare = function v_2(current, found) {
        let v_3 = less_than(current, found);
        return v_3;
    };
    let v = list_compare_generic(list, identity, compare);
    return v;
    metadata([]);
}