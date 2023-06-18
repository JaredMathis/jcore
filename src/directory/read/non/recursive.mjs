import { path_join } from '../../../path/join.mjs';
import { list_map } from '../../../list/map.mjs';
import fs from 'fs';
export async function directory_read_non_recursive(dir) {
    const files = await fs.promises.readdir(dir);
    let file_paths = list_map(files, function v(file) {
        let v_2 = path_join([
            dir,
            file
        ]);
        return v_2;
    });
    return file_paths;
}