import { path_is } from '../path/is.mjs';
import { directory_read_recursive } from './read/recursive.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { comment } from '../comment.mjs';
export async function directory_read(dir) {
    arguments_assert(arguments, [path_is]);
    comment('From: https://gist.github.com/kethinov/6658166');
    let v_2 = [];
    let v = await directory_read_recursive(dir, v_2);
    return v;
    metadata([]);
}