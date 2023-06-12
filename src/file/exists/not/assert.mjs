import { file_exists } from '../../exists.mjs';
import { assert } from '../../../assert.mjs';
export async function file_exists_not_assert(file_path) {
    assert(!await file_exists(file_path));
}