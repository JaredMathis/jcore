import { string_split } from '../split.mjs';
export function string_to_list(value) {
    return string_split(value, '');
}