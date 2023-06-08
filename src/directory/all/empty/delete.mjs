import { directory_empty_is } from '../../empty/is.mjs';
import { file_delete } from '../../../file/delete.mjs';
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
            const is_empty = await directory_empty_is(directory_path);
            if (is_empty) {
                await file_delete(directory_path);
                changed = true;
            }
        }
    } while (changed);
}