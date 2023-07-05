import { file_rename } from '../../rename.mjs';
import { path_join } from '../../../path/join.mjs';
import { path_parent } from '../../../path/parent.mjs';
import { path_parse_base } from '../../../path/parse/base.mjs';
export async function file_move_to_subdirectory(file_path_before, video_key) {
    let base = path_parse_base(file_path_before);
    let parent = path_parent(file_path_before);
    let file_path_after = path_join([
        parent,
        video_key,
        base
    ]);
    await file_rename(file_path_before, file_path_after);
}