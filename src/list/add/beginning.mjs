import { metadata } from '../../metadata.mjs';
export function list_add_beginning(list, element) {
    list.unshift(element);
    metadata([]);
}