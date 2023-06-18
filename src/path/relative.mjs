import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import path from 'path';
import { path_is } from './is.mjs';
export function path_relative(from, to) {
    arguments_assert(arguments, [
        path_is,
        path_is
    ]);
    let v = path.relative(from, to);
    return v;
    metadata([]);
}