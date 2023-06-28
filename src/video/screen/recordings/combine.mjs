import { file_temporary } from '../../../file/temporary.mjs';
import { list_map } from '../../../list/map.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
import { git_exclude } from '../../../git/exclude.mjs';
import { command_line } from '../../../command/line.mjs';
import { string_new_line } from '../../../string/new/line.mjs';
import { list_join } from '../../../list/join.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { path_video_screen_recordings } from '../../../path/video/screen/recordings.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_join } from '../../../path/join.mjs';
import { directory_exists_ensure } from '../../../directory/exists/ensure.mjs';
export async function video_screen_recordings_combine() {
    arguments_assert(arguments, []);
    let ish_video_1 = 'ish_video_1';
    let path_base = path_video_screen_recordings();
    let path_combined = path_join([
        path_base,
        ish_video_1
    ]);
    let path_output = 'videos';
    await directory_exists_ensure(path_output);
    await git_exclude(path_output);
    let paths = await directory_read(path_combined);
    let mapped = list_map(paths, function v_3(p) {
        return `file \'${ p }\'`;
    });
    list_add_beginning(mapped, `ffconcat version 1.0`);
    let contents = list_join(mapped, string_new_line());
    let file_path_temporary = await file_temporary(contents, logic);
    `

Exec(cmd, function(err, stdout, stderr) {
  if(err) console.log(err)
  else console.log("Done!")
})
    `;
    return paths;
    async function logic(file_path_temporary) {
        let file_path_output_name = `${ ish_video_1 }.mp4`;
        let file_path_output = path_join([
            path_output,
            file_path_output_name
        ]);
        let command = `ffmpeg -f concat -safe 0 -i ${ file_path_temporary } -c copy ${ file_path_output }`;
        await command_line(command);
    }
}