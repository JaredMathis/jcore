import { metadata } from '../metadata.mjs';
export function json_to(object) {
    return JSON.stringify(object, null, ' ');
    metadata([]);
}