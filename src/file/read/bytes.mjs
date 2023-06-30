import { metadata } from '../../metadata.mjs';
import { assert_message } from '../../assert/message.mjs';
import { string_combine } from '../../string/combine.mjs';
import { path_exists } from '../../path/exists.mjs';
import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function file_read_bytes(file_path) {
    arguments_assert(arguments, [path_is]);
    let v = await path_exists(file_path);
    let v_4 = `Path does not exist: `;
    let v_2 = string_combine(v_4, file_path);
    assert_message(v, v_2);
    let v_3 = 'utf8';
    let result = await fs.promises.readFile(file_path, v_3);
    return result;
    metadata([]);
}