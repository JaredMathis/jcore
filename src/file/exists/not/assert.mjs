import { not } from '../../../not.mjs';
import { file_exists } from '../../exists.mjs';
import { assert } from '../../../assert.mjs';
export async function file_exists_not_assert(file_path) {
    let v_2 = await file_exists(file_path);
    let v = not(v_2);
    assert(v);
}