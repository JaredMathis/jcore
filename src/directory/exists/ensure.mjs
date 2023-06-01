import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { path_exists } from '../../path/exists.mjs';
import { directory_add } from '../add.mjs';
export async function directory_exists_ensure(directory_path) {
    arguments_assert(arguments, [tautology]);
    if (await path_exists(directory_path)) {
        return;
    }
    await directory_add(directory_path);
    metadata([]);
}