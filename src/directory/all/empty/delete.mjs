import { directory_delete_if_empty_recursive } from '../../delete/if/empty/recursive.mjs';
import { directory_current_to_source } from '../../current/to/source.mjs';
import { directory_read_directories } from '../../read/directories.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function directory_all_empty_delete() {
    arguments_assert(arguments, []);
    let result = await directory_read_directories(directory_current_to_source());
    for (let directory_path of result) {
        await directory_delete_if_empty_recursive(directory_path);
    }
}