import { not } from '../not.mjs';
import { list_index_of_single } from './index/of/single.mjs';
import { defined_is } from '../defined/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_remove_at } from './remove/at.mjs';
import { assert } from '../assert.mjs';
import { list_contains } from './contains.mjs';
export function list_remove(list, element) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    let index = list_index_of_single(list, element);
    list_remove_at(list, index);
    let v_2 = list_contains(list, element);
    let v = not(v_2);
    assert(v);
    metadata([]);
}