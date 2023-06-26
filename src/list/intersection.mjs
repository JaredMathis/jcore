import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { equal } from '../equal.mjs';
import { list_adder_unique } from './adder/unique.mjs';
export function list_intersection(left, right) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    let v_3 = function v_2(la) {
        for (let l of left) {
            for (let r of right) {
                let v = equal(l, r);
                if (v) {
                    la(l);
                }
            }
        }
    };
    let v_4 = list_adder_unique(v_3);
    return v_4;
    metadata([]);
}