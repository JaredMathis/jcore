import { metadata } from '../../../metadata.mjs';
import { path_join } from '../../../path/join.mjs';
import { list_map } from '../../../list/map.mjs';
import fs from 'fs';
export async function directory_read_non_recursive(dir) {
    const files = await fs.promises.readdir(dir);
    let v_3 = function v(file) {
        let v_4 = [
            dir,
            file
        ];
        let v_2 = path_join(v_4);
        return v_2;
    };
    let file_paths = list_map(files, v_3);
    return file_paths;
    metadata([]);
}