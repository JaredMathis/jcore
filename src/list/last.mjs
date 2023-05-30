import { list_last_index } from './last/index.mjs';
import { list_index_at } from './index/at.mjs';
export function list_last(list) {
    return list_index_at(list, list_last_index(list));
}