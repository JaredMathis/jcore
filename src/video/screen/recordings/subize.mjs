import { file_move_to_subdirectory } from '../../../file/move/to/subdirectory.mjs';
import { video_paths_filter } from '../../paths/filter.mjs';
import { video_screen_recordings_path_read } from './path/read.mjs';
import { video_screen_recordings_combine } from './combine.mjs';
import { js_identifier_combine } from '../../../js/identifier/combine.mjs';
import { string_to } from '../../../string/to.mjs';
import { string_starts_with } from '../../../string/starts/with.mjs';
import { js_identifier_name_next_prefix_list } from '../../../js/identifier/name/next/prefix/list.mjs';
import { path_parse_base } from '../../../path/parse/base.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { video_screen_recordings_prefix } from './prefix.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_map } from '../../../list/map.mjs';
import { assert_message } from '../../../assert/message.mjs';
import { list_empty_not } from '../../../list/empty/not.mjs';
export async function video_screen_recordings_subize() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let paths = await video_screen_recordings_path_read();
    let bases = list_map(paths, path_parse_base);
    let bases_filtered = list_filter(bases, function v_2(p) {
        return string_starts_with(p, ish_video_prefix);
    });
    assert_message(list_empty_not(bases_filtered), `if this fails then code needs to handle this case`);
    let video_key = js_identifier_name_next_prefix_list(bases_filtered, ish_video_prefix, js_identifier_combine(ish_video_prefix, string_to(1)));
    let filtered = video_paths_filter(paths);
    for (let file_path_before of filtered) {
        await file_move_to_subdirectory(file_path_before, video_key);
    }
    return {
        file_paths: await video_screen_recordings_combine(video_key),
        video_key
    };
}