import { string_ends_with } from '../../string/ends/with.mjs';
import { list_filter } from '../../list/filter.mjs';
export function video_paths_filter(paths) {
    return list_filter(paths, function v(p) {
        return string_ends_with(p, '.mkv');
    });
}