import { list_single_item } from '../../single/item.mjs';
import { list_copy_shallow_add_multiple } from './add/multiple.mjs';
export function list_copy_shallow_add(refactor_stack, child) {
    return list_copy_shallow_add_multiple(refactor_stack, list_single_item(child));
}