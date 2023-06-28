import { file_delete } from '../../../file/delete.mjs';
import { try_catch_finally_async } from '../../../try/catch/finally/async.mjs';
import { try_catch_finally } from '../../../try/catch/finally.mjs';
import { string_new_line } from '../../../string/new/line.mjs';
import { list_join } from '../../../list/join.mjs';
import { file_write } from '../../../file/write.mjs';
import { guid_generate } from '../../../guid/generate.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { path_video_screen_recordings } from '../../../path/video/screen/recordings.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_join } from '../../../path/join.mjs';
import { file_exists } from '../../../file/exists.mjs';
export async function video_screen_recordings_combine() {
    arguments_assert(arguments, []);
    let ish_video_1 = 'ish_video_1';
    let path_base = path_video_screen_recordings();
    let path_combined = path_join([
        path_base,
        ish_video_1
    ]);
    let paths = await directory_read(path_combined);
    await try_catch_finally_async(async function v() {
        let file_path = `${ guid_generate() }.txt`;
        try_catch_finally;
        await file_write(file_path, list_join(paths, string_new_line()));
    }, async function v_2() {
        if (await file_exists(file_path)) {
            await file_delete(file_path);
        }
    });
    let cmd = `ffmpeg -f concat -i ${ file_path } -c copy merged_video.mp4``

Exec(cmd, function(err, stdout, stderr) {
  if(err) console.log(err)
  else console.log("Done!")
})
    `;
    return paths;
}