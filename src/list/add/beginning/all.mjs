import { list_add_beginning } from '../beginning.mjs';
export function list_add_beginning_all(list, element_new_all) {
    for (let e of element_new_all) {
        list_add_beginning(list, e);
    }
}