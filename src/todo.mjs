import { metadata } from './metadata.mjs';
import { comment } from './comment.mjs';
export function todo(message) {
    comment(message);
    metadata([]);
}