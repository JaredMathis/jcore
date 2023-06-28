import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { json_from } from '../../json/from.mjs';
import { file_read } from '../read.mjs';
export async function file_json_read(file_path) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let json = await file_read(file_path);
    let result = json_from(json);
    return result;
    metadata([]);
}