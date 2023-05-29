import { array_add } from '../add.mjs';
export function array_add_all(list, list_other) {
    for (let o of list_other) {
        array_add(list, o);
    }
}