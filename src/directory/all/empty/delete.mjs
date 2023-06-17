import { directory_all_empty_count } from './count.mjs';
import { equal } from '../../../equal.mjs';
import { directory_delete_if_empty_recursive } from '../../delete/if/empty/recursive.mjs';
import { directory_current_to_source } from '../../current/to/source.mjs';
import { directory_read_directories } from '../../read/directories.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_exists } from '../../../path/exists.mjs';
import { assert } from '../../../assert.mjs';
export async function directory_all_empty_delete() {
    arguments_assert(arguments, []);
    let result = await directory_read_directories(directory_current_to_source());
    for (let directory_path of result) {
        if (not(await path_exists(directory_path))) {
            continue;
        }
        await directory_delete_if_empty_recursive(directory_path);
    }
    assert(equal(await directory_all_empty_count(), 0));
}