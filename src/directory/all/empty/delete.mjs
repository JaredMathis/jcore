import { integer_value_0 } from '../../../integer/value/0.mjs';
import { not } from '../../../not.mjs';
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
    let v = directory_current_to_source();
    let result = await directory_read_directories(v);
    for (let directory_path of result) {
        let v_4 = not(await path_exists(directory_path));
        if (v_4) {
            continue;
        }
        await directory_delete_if_empty_recursive(directory_path);
    }
    let v_3 = await directory_all_empty_count();
    let v_2 = equal(v_3, integer_value_0());
    assert(v_2);
}