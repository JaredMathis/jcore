import { list_map } from '../../../list/map.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
import { string_replace } from '../../../string/replace.mjs';
import { git_exclude } from '../../../git/exclude.mjs';
import { command_line } from '../../../command/line.mjs';
import { file_delete } from '../../../file/delete.mjs';
import { try_catch_finally_async } from '../../../try/catch/finally/async.mjs';
import { string_new_line } from '../../../string/new/line.mjs';
import { list_join } from '../../../list/join.mjs';
import { file_write } from '../../../file/write.mjs';
import { guid_generate } from '../../../guid/generate.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { path_video_screen_recordings } from '../../../path/video/screen/recordings.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_join } from '../../../path/join.mjs';
import { file_exists } from '../../../file/exists.mjs';
import { directory_exists_ensure } from '../../../directory/exists/ensure.mjs';
import { log } from '../../../log.mjs';
import { file_read } from '../../../file/read.mjs';
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
        return `file \'${p}\'`;
    });
    list_add_beginning(mapped, `ffconcat version 1.0`);
    let file_path_temporary = `${ guid_generate() }.txt`;
    await try_catch_finally_async(async function v() {
        let contents = list_join(mapped, string_new_line());
        await file_write(file_path_temporary, contents);
        let file_path_output_name = `${ish_video_1}.mp4`;
        let file_path_output = path_join([
            path_output,
            file_path_output_name
        ]);
        let command = `ffmpeg -f concat -safe 0 -i ${ file_path_temporary } -c copy ${ file_path_output }`;
        await command_line(command);
    }, async function v_2() {
        if (await file_exists(file_path_temporary)) {
            log(await file_read(file_path_temporary));
            await file_delete(file_path_temporary);
        }
    });
    `

Exec(cmd, function(err, stdout, stderr) {
  if(err) console.log(err)
  else console.log("Done!")
})
    `;
    return paths;
}