import { metadata } from '../../metadata.mjs';
import { file_exists } from '../../file/exists.mjs';
import { assert } from '../../assert.mjs';
import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function directory_empty_delete(file_path) {
    arguments_assert(arguments, [path_is]);
    assert(await file_exists(file_path));
    await fs.promises.rm(file_path);
    metadata([]);
}