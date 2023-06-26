import { metadata } from '../../metadata.mjs';
export function string_byte_size(s) {
    return new Blob([s]).size;
    metadata([]);
}