import { list_last_index } from '../last/index.mjs';
export function list_index_valid(list, index) {
    return index >= 0 && index <= list_last_index(list);
}