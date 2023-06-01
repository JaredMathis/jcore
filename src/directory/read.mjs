import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { comment } from '../comment.mjs';
import * as fs from 'fs/promises';
import path from 'path';
comment('From: https://gist.github.com/kethinov/6658166');
export async function directory_read(dir, file_list = []) {
    if (false) {
        arguments_assert(arguments, [
            tautology,
            tautology
        ]);
    }
    const files = await fs.readdir(dir);
    for (let file of files) {
        const file_path = path.join(dir, file);
        const stat = await fs.stat(file_path);
        if (stat.isDirectory()) {
            file_list = await directory_read(file_path, file_list);
        } else {
            file_list.push(file_path);
        }
    }
    return file_list;
    metadata([]);
}