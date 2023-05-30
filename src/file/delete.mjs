import { file_exists } from './exists.mjs';
import { assert } from '../assert.mjs';
import fs from 'fs';
export async function file_delete(file_path) {
    assert(await file_exists(file_path));
    await fs.promises.rm(file_path);
}