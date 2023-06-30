import { string_combine_multiple } from '../../string/combine/multiple.mjs';
import { function_name_separator } from '../../function/name/separator.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { command_line_ffmpeg } from '../../command/line/ffmpeg.mjs';
import { video_name_map } from '../name/map.mjs';
import { path_exists } from '../../path/exists.mjs';
import { assert } from '../../assert.mjs';
import { video_path_get } from '../path/get.mjs';
export async function video_ffmpeg_generic(video_key, middle, suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let file_path_input = video_path_get(video_key);
    assert(await path_exists(file_path_input));
    let file_path_output = video_name_map(file_path_input, lambda_map);
    assert(!await path_exists(file_path_output));
    await command_line_ffmpeg(file_path_input, file_path_output, ``, middle);
    function lambda_map(name_before) {
        const strings = [
            name_before,
            function_name_separator(),
            suffix
        ];
        let result = string_combine_multiple(strings);
        return result;
    }
}