import { metadata } from '../metadata.mjs';
import { list_slice } from './slice.mjs';
import { list_length } from './length.mjs';
export function list_skip(list, skip_count) {
    return list_slice(list, skip_count, list_length(list));
    metadata([]);
}