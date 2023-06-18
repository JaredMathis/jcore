import { list_adder_unique } from './adder/unique.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_unique(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_adder_unique(function v_2(la) {
        for (let element of list) {
            la(element);
        }
    });
    return v;
    metadata([]);
}