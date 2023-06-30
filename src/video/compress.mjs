import { video_name_map } from './name/map.mjs';
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
    let file_path_output_new = video_name_map(file_path_output, lambda_map);
    return file_path_output_new;
    await command_line_ffmpeg(file_path_input, file_path_output, ``, `-vcodec libx265 -crf 28`);
    function lambda_map(name_before) {
        return js_identifier_combine(name_before, 'compressed');
    }
}