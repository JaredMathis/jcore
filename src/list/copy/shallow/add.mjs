import { metadata } from '../../../metadata.mjs';
import { list_single_item } from '../../single/item.mjs';
import { list_copy_shallow_add_multiple } from './add/multiple.mjs';
export function list_copy_shallow_add(refactor_stack, child) {
    let v = list_single_item(child);
    let v_2 = list_copy_shallow_add_multiple(refactor_stack, v);
    return v_2;
    metadata([]);
}