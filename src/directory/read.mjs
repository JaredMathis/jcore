import { path_is } from '../path/is.mjs';
import { directory_read_recursive } from './read/recursive.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { comment } from '../comment.mjs';
comment('From: https://gist.github.com/kethinov/6658166');
export async function directory_read(dir) {
    arguments_assert(arguments, [path_is]);
    return await directory_read_recursive(dir, []);
    metadata([]);
}