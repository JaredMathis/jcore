import { file_exists_not_assert } from './exists/not/assert.mjs';
import { string_is } from '../string/is.mjs';
import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_overwrite } from './overwrite.mjs';
export async function file_write(file_path, contents) {
    arguments_assert(arguments, [
        path_is,
        string_is
    ]);
    await file_exists_not_assert(file_path);
    await file_overwrite(file_path, contents);
    metadata([]);
}