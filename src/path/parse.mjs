import { arguments_assert } from '../arguments/assert.mjs';
import path from 'path';
import { path_is } from './is.mjs';
export function path_parse(input) {
    arguments_assert(arguments, [path_is]);
    return path.parse(input);
}