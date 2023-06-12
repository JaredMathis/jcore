import { directory_delete } from '../delete.mjs';
import { directory_empty_is } from './is.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import fs from 'fs';
export async function directory_empty_delete(directory_path) {
    arguments_assert(arguments, [path_is]);
    assert(await directory_empty_is(directory_path));
    await directory_delete(directory_path);
    metadata([]);
}