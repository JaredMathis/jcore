import { path_parent } from '../../../path/parent.mjs';
import { directory_empty_delete } from '../../empty/delete.mjs';
import { directory_empty_is } from '../../empty/is.mjs';
import { directory_current_to_source } from '../../current/to/source.mjs';
import { directory_read_directories } from '../../read/directories.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function directory_all_empty_delete() {
    arguments_assert(arguments, []);
    let result = await directory_read_directories(directory_current_to_source());
    for (let directory_path of result) {
        if (await directory_empty_is(directory_path)) {
            await directory_empty_delete(directory_path);
            let parent = path_parent();
        }
    }
}