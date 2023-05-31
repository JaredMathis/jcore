import { metadata } from '../../metadata.mjs';
import { list_contains } from '../contains.mjs';
import { list_filter } from '../filter.mjs';
export function list_without_all(list, values) {
    return list_filter(list, element => !list_contains(values, element));
    metadata([]);
}