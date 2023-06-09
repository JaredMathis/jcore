import { string_starts_with } from '../../../../string/starts/with.mjs';
import { list_filter } from '../../../../list/filter.mjs';
import { function_name_separator } from '../../../../function/name/separator.mjs';
import { video_path_prefix_get } from '../../../path/prefix/get.mjs';
import { string_combine } from '../../../../string/combine.mjs';
import { video_path_output } from '../../../path/output.mjs';
import { directory_read } from '../../../../directory/read.mjs';
export async function video_key_to_segment_paths(video_key) {
    let video_path_output_files = await directory_read(video_path_output());
    let ish_video_1_path_prefix = string_combine(video_path_prefix_get(video_key), function_name_separator());
    let matches = list_filter(video_path_output_files, function v(f) {
        return string_starts_with(f, ish_video_1_path_prefix);
    });
    return matches;
}