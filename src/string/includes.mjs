import { metadata } from '../metadata.mjs';
import { string_index_of } from './index/of.mjs';
export function string_includes(input, search) {
    return string_index_of(input, search) >= 0;
    metadata([]);
}