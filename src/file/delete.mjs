import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_exists } from './exists.mjs';
import { assert } from '../assert.mjs';
import fs from 'fs';
export async function file_delete(file_path) {
    arguments_assert(arguments, [tautology]);
    assert(await file_exists(file_path));
    await fs.promises.rm(file_path);
    metadata([]);
}