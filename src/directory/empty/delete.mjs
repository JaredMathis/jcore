import { directory_empty_is } from './is.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import fs from 'fs';
import { path_exists } from '../../path/exists.mjs';
export async function directory_empty_delete(directory_path) {
    arguments_assert(arguments, [path_is]);
    assert(await directory_empty_is(directory_path));
    assert(await path_exists(directory_path));
    await fs.promises.rmdir(directory_path);
    metadata([]);
}