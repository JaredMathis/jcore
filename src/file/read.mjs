import { assert } from '../assert.mjs';
import {directory_exists} from '../directory/exists.mjs'
import fs from 'fs'
export async function file_read(file_path) {
    assert(await directory_exists(file_path));
    return await fs.promises.readFile(file_path, 'utf8');
}