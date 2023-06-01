import { directory_read_recursive } from './read/recursive.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { comment } from '../comment.mjs';
import * as fs from 'fs/promises';
import path from 'path';
comment('From: https://gist.github.com/kethinov/6658166');
export async function directory_read(dir) {
    arguments_assert(arguments, [tautology]);
    return await directory_read_recursive(dir, []);
    metadata([]);
}