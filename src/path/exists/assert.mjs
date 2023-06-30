import { assert_message } from '../../assert/message.mjs';
import { string_combine } from '../../string/combine.mjs';
import { path_exists } from '../exists.mjs';
export async function path_exists_assert(file_path) {
    let v = await path_exists(file_path);
    let v_4 = `Path does not exist: `;
    let v_2 = string_combine(v_4, file_path);
    assert_message(v, v_2);
}