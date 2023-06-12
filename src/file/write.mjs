import { assert } from '../assert.mjs';
import { string_is } from '../string/is.mjs';
import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { path_exists } from '../path/exists.mjs';
import { file_overwrite } from './overwrite.mjs';
export async function file_write(file_path, contents) {
    arguments_assert(arguments, [
        path_is,
        string_is
    ]);
    assert(!await path_exists(file_path));
    await file_overwrite(file_path, contents);
    metadata([]);
}