import { metadata } from './metadata.mjs';
import { arguments_count } from './arguments/count.mjs';
export function comment(text) {
    arguments_count(arguments, 1);
    metadata([]);
}