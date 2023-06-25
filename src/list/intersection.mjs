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
    return list_adder_unique(la => {
        for (let l of left) {
            for (let r of right) {
                if (equal(l, r)) {
                    la(l);
                }
            }
        }
    });
    metadata([]);
}