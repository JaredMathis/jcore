import { not } from '../not.mjs';
import { file_is } from './is.mjs';
import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { path_exists } from '../path/exists.mjs';
import { assert } from '../assert.mjs';
export async function file_exists(file_path) {
    arguments_assert(arguments, [path_is]);
    if (not(await path_exists(file_path))) {
        return false;
    }
    assert(await file_is(file_path));
    return true;
    metadata([]);
}