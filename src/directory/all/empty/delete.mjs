import { file_delete } from '../../../file/delete.mjs';
import { equal } from '../../../equal.mjs';
import { list_length } from '../../../list/length.mjs';
import { directory_read_paths } from '../../read/paths.mjs';
import { directory_current_to_source } from '../../current/to/source.mjs';
import { directory_read_directories } from '../../read/directories.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function directory_all_empty_delete() {
    arguments_assert(arguments, []);
    let changed;
    do {
        changed = false;
        let result = await directory_read_directories(directory_current_to_source());
        for (let directory_path of result) {
            let file_paths = await directory_read_paths(directory_path);
            let count = list_length(file_paths);
            if (equal(count, 0)) {
                await file_delete(directory_path);
                changed = true;
            }
        }
    } while (changed);
}