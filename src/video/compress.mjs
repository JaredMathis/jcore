import { command_line_ffmpeg } from '../command/line/ffmpeg.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function video_compress() {
    arguments_assert(arguments, []);
        await command_line_ffmpeg(file_path_input, file_path_output, ``, `-vcodec libx265 -crf 28`);
}