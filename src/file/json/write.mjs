import { not } from '../../not.mjs';
import { file_json_overwrite } from './overwrite.mjs';
import { file_exists } from '../exists.mjs';
import { assert } from '../../assert.mjs';
export async function file_json_write(file_path, object_not_json) {
    assert(not(await file_exists(file_path)));
    await file_json_overwrite(file_path, object_not_json);
}