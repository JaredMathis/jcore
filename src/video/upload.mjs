import { string_starts_with } from '../string/starts/with.mjs';
import { list_filter } from '../list/filter.mjs';
import { video_path_output } from './path/output.mjs';
import { video_path_prefix_get } from './path/prefix/get.mjs';
import { file_read_bytes } from '../file/read/bytes.mjs';
import { video_screen_recordings_prefix } from './screen/recordings/prefix.mjs';
import { js_identifier_combine } from '../js/identifier/combine.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { publitioApi } from 'publitio_js_sdk';
import { private_get } from '../private/get.mjs';
import { directory_read } from '../directory/read.mjs';
import { string_combine } from '../string/combine.mjs';
import { function_name_separator } from '../function/name/separator.mjs';
export async function video_upload() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let ish_video_1 = js_identifier_combine(ish_video_prefix, `1`);
    let video_path_output_files = await directory_read(video_path_output());
    let ish_video_1_path_prefix = string_combine(video_path_prefix_get(ish_video_1), function_name_separator());
    let matches = list_filter(video_path_output_files, function v(f) {
        return string_starts_with(f, ish_video_1_path_prefix);
    });
    return matches;
    const publitio = publitioApi(await private_get(`publit_api_key`), await private_get(`publit_api_secret`));
    const file = await file_read_bytes(ish_video_1_path);
    return await publitio.uploadFile(file, 'file', {
        title: ish_video_1,
        description: ish_video_1,
        tags: '',
        privacy: '1',
        option_download: '0'
    });
}