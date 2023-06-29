import { video_path_output } from '../../path/output.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { file_temporary } from '../../../file/temporary.mjs';
import { command_line } from '../../../command/line.mjs';
import { string_new_line } from '../../../string/new/line.mjs';
import { list_join } from '../../../list/join.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
import { list_map } from '../../../list/map.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { git_exclude } from '../../../git/exclude.mjs';
import { directory_exists_ensure } from '../../../directory/exists/ensure.mjs';
import { path_join } from '../../../path/join.mjs';
import { video_screen_recordings_path } from './path.mjs';
export async function video_screen_recordings_combine(ish_video_1) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let path_base = video_screen_recordings_path();
    let path_combined = path_join([
        path_base,
        ish_video_1
    ]);
    let path_output = video_path_output();
    await directory_exists_ensure(path_output);
    await git_exclude(path_output);
    let paths = await directory_read(path_combined);
    let mapped = list_map(paths, function v_3(p) {
        return `file \'${ p }\'`;
    });
    list_add_beginning(mapped, `ffconcat version 1.0`);
    let contents = list_join(mapped, string_new_line());
    async function logic(file_path_temporary) {
        let file_path_output_name = `${ ish_video_1 }.mp4`;
        let file_path_output = path_join([
            video_path_output(),
            file_path_output_name
        ]);
        let command = `ffmpeg -f concat -safe 0 -i ${ file_path_temporary } -c copy ${ file_path_output }`;
        await command_line(command);
    }
    await file_temporary(contents, logic);
    return paths;
}