import { video_name_get } from './get.mjs';
import { path_join } from '../../path/join.mjs';
import { path_parent } from '../../path/parent.mjs';
import { path_parse_name } from '../../path/parse/name.mjs';
export function video_name_map(file_path_video_before, lambda_map) {
    let name_before = path_parse_name(file_path_video_before);
    let name_after = lambda_map(name_before);
    let parent = path_parent(file_path_video_before);
    let file_path_video_after = path_join([
        parent,
        video_name_get(name_after)
    ]);
    return file_path_video_after;
}