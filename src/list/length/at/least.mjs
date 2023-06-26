import { metadata } from '../../../metadata.mjs';
import { list_length } from '../../length.mjs';
export function list_length_at_least(list, value) {
    return list_length(list) >= value;
    metadata([]);
}