import { list_adder_unique } from './adder/unique.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_unique(list) {
    arguments_assert(arguments, [list_is]);
    return list_adder_unique(la => {
        for (let element of list) {
            la(element);
        }
    });
    metadata([]);
}