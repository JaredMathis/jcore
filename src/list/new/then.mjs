import { list_add } from '../add.mjs';
export function list_new_then(then) {
    let list = [];
    then(list_new_then_add);
    function list_new_then_add(element) {
        list_add(list, element);
    }
    return list;
}