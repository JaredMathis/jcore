import { metadata } from './metadata.mjs';
export function log(message) {
    console.log(message);
    metadata([]);
}