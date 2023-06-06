import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_is } from '../string/is.mjs';
export function json_from(json) {
    arguments_assert(arguments, [string_is]);
    return JSON.parse(json);
    metadata([]);
}