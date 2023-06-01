import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function json_from(json) {
    arguments_assert(arguments, [tautology]);
    return JSON.parse(json);
    metadata([]);
}