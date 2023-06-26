import { metadata } from '../../metadata.mjs';
import { add_1 } from '../../add/1.mjs';
import { list_index_of } from './of.mjs';
export function list_index_after(list, element_after) {
    let after_index = list_index_of(list, element_after);
    let add_index = add_1(after_index);
    return add_index;
    metadata([]);
}