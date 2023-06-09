import { git_exclude_ensure_exists } from '../../../git/exclude/ensure/exists.mjs';
import { command_line_ffmpeg } from '../../../command/line/ffmpeg.mjs';
import { video_path_get } from '../../path/get.mjs';
import { video_path_output } from '../../path/output.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { file_temporary } from '../../../file/temporary.mjs';
import { string_new_line } from '../../../string/new/line.mjs';
import { list_join } from '../../../list/join.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
import { list_map } from '../../../list/map.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { path_join } from '../../../path/join.mjs';
import { video_screen_recordings_path } from './path.mjs';
export async function video_screen_recordings_combine(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let path_base = video_screen_recordings_path();
    let path_combined = path_join([
        path_base,
        video_key
    ]);
    let path_output = video_path_output();
    await git_exclude_ensure_exists(path_output);
    let paths = await directory_read(path_combined);
    let mapped = list_map(paths, function v_3(p) {
        return `file \'${ p }\'`;
    });
    list_add_beginning(mapped, `ffconcat version 1.0`);
    let contents = list_join(mapped, string_new_line());
    async function logic(file_path_temporary) {
        let file_path_output = video_path_get(video_key);
        await command_line_ffmpeg(file_path_temporary, file_path_output, `-f concat -safe 0`, `-c copy`);
    }
    await file_temporary(contents, logic);
    return paths;
}