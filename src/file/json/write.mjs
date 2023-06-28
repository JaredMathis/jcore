import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { file_json_overwrite } from './overwrite.mjs';
import { file_exists } from '../exists.mjs';
import { assert } from '../../assert.mjs';
export async function file_json_write(file_path, object_not_json) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = await file_exists(file_path);
    let v = not(v_2);
    assert(v);
    await file_json_overwrite(file_path, object_not_json);
    metadata([]);
}