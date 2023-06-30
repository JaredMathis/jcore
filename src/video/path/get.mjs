import { video_path_prefix_get } from './prefix/get.mjs';
import { video_name_get } from '../name/get.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function video_path_get(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let video_key_path = video_path_prefix_get(video_key);
    let file_path_output_name = video_name_get(video_key_path);
    return file_path_output_name;
}