import { metadata } from '../../../metadata.mjs';
import { string_length } from '../../length.mjs';
export function string_length_at_least(function_name, at_least) {
    return string_length(function_name) >= at_least;
    metadata([]);
}