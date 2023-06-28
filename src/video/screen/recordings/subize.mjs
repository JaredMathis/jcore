import { js_identifier_combine } from '../../../js/identifier/combine.mjs';
import { string_to } from '../../../string/to.mjs';
import { string_starts_with } from '../../../string/starts/with.mjs';
import { js_identifier_name_next_prefix_list } from '../../../js/identifier/name/next/prefix/list.mjs';
import { path_parse_base } from '../../../path/parse/base.mjs';
import { path_parent } from '../../../path/parent.mjs';
import { file_rename } from '../../../file/rename.mjs';
import { string_ends_with } from '../../../string/ends/with.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { video_screen_recordings_path } from './path.mjs';
import { video_screen_recordings_prefix } from './prefix.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { directory_read_non_recursive } from '../../../directory/read/non/recursive.mjs';
import { log } from '../../../log.mjs';
import { list_map } from '../../../list/map.mjs';
import { path_join } from '../../../path/join.mjs';
export async function video_screen_recordings_subize() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let path_base = video_screen_recordings_path();
    let paths = await directory_read_non_recursive(path_base);
    let bases = list_map(paths, path_parse_base);
    let bases_filtered = list_filter(bases, function v_2(p) {
        return string_starts_with(p, ish_video_prefix);
    });
    let next = js_identifier_name_next_prefix_list(bases_filtered, ish_video_prefix, js_identifier_combine(ish_video_prefix, string_to(1)));
    let filtered = list_filter(paths, function v(p) {
        return string_ends_with(p, '.mkv');
    });
    for (let f of filtered) {
        let base = path_parse_base(f);
        let parent = path_parent(f);
        let joined = path_join([parent, next, base])
        file_rename;
        log({
            f,
            joined
        });
    }
}