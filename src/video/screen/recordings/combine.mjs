import { guid_generate } from '../../../guid/generate.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { path_video_screen_recordings } from '../../../path/video/screen/recordings.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_join } from '../../../path/join.mjs';
export async function video_screen_recordings_combine() {
    arguments_assert(arguments, []);
    let ish_video_1 = 'ish_video_1';
    let path_base = path_video_screen_recordings();
    let path_combined = path_join([
        path_base,
        ish_video_1
    ]);
    let paths = await directory_read(path_combined);
    let file_path = `${ guid_generate() }.txt`;
    let cmd = `ffmpeg -f concat -i ${ file_path } -c copy merged_video.mp4``

Exec(cmd, function(err, stdout, stderr) {
  if(err) console.log(err)
  else console.log("Done!")
})
    `;
    return paths;
}