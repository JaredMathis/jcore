import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function json_to(object) {
    arguments_assert(arguments, [tautology]);
    return JSON.stringify(object, null, ' ');
    metadata([]);
}