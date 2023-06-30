import { path_parse_name } from '../path/parse/name.mjs';
import { video_path_get } from './path/get.mjs';
import { js_identifier_combine } from '../js/identifier/combine.mjs';
import { video_screen_recordings_prefix } from './screen/recordings/prefix.mjs';
import { command_line_ffmpeg } from '../command/line/ffmpeg.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function video_compress() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let video_key = js_identifier_combine(ish_video_prefix, `1`);
    let file_path_output = video_path_get(video_key);
    let name = path_parse_name(file_path_output);
    await command_line_ffmpeg(file_path_input, file_path_output, ``, `-vcodec libx265 -crf 28`);
}