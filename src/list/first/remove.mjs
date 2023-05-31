import { metadata } from '../../metadata.mjs';
import { list_remove_at } from '../remove/at.mjs';
import { list_first_index } from './index.mjs';
export function list_first_remove(list) {
    list_remove_at(list, list_first_index());
    metadata([]);
}