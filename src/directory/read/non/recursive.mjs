import { path_join } from '../../../path/join.mjs';
import { list_map } from '../../../list/map.mjs';
import fs from 'fs';
export async function directory_read_non_recursive(dir) {
    const files = await fs.promises.readdir(dir);
    let file_paths = list_map(files, file => path_join([
        dir,
        file
    ]));
    return file_paths;
}