import { js_identifier_combine } from '../js/identifier/combine.mjs';
import { command_line_ffmpeg } from '../command/line/ffmpeg.mjs';
import { video_name_map } from './name/map.mjs';
import { path_exists } from '../path/exists.mjs';
import { assert } from '../assert.mjs';
import { video_path_get } from './path/get.mjs';
export async function video_compress(video_key) {
    let file_path_input = video_path_get(video_key);
    assert(await path_exists(file_path_input));
    let file_path_output = video_name_map(file_path_input, lambda_map);
    assert(!await path_exists(file_path_output));
    await command_line_ffmpeg(file_path_input, file_path_output, ``, `-vcodec libx265 -crf 28`);
    function lambda_map(name_before) {
        return js_identifier_combine(name_before, 'compressed');
    }
}