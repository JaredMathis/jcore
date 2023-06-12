import { file_json_overwrite } from './overwrite.mjs';
import { file_exists } from '../exists.mjs';
import { assert } from '../../assert.mjs';
export async function file_json_write(commit_path, commit) {
    assert(!await file_exists(commit_path));
    await file_json_overwrite(commit_path, commit);
}