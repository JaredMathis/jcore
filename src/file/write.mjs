import {directory_exists} from '../directory/exists.mjs'
import { error } from '../error.mjs'
import { file_overwrite } from './overwrite.mjs';
export async function file_write(file_path, contents) {
    if (await directory_exists(file_path)) {
        error('file already exists: ' + file_path);
    }
    await file_overwrite(file_path, contents);
}