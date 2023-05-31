import { metadata } from '../metadata.mjs';
import { list_first_index } from './first/index.mjs';
import { list_index_at } from './index/at.mjs';
export function list_first(list) {
    return list_index_at(list, list_first_index());
    metadata([]);
}