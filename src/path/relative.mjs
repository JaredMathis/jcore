import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import path from 'path';
export function path_relative(from, to) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return path.relative(from, to);
    metadata([]);
}