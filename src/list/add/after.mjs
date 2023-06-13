import { list_add_at } from './at.mjs';
import { add_1 } from '../../add/1.mjs';
import { list_index_of } from '../index/of.mjs';
export function list_add_after(list, element_to_add, element_after) {
    let after_index = list_index_of(list, element_after);
    let add_index = add_1(after_index);
    list_add_at(list, element_to_add, add_index);
}