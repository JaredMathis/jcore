import { command_line_ffmpeg } from '../command/line/ffmpeg.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function video_compress() {
    arguments_assert(arguments, []);
    if (false) {
        await command_line_ffmpeg(file_path_temporary, file_path_output, ``, `-vcodec libx265 -crf 28`);
    }
}