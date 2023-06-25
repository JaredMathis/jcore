import { list_empty_not } from '../../list/empty/not.mjs';
import { git_exclude } from '../exclude.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { git_ignore_lines } from '../ignore/lines.mjs';
import { path_exists } from '../../path/exists.mjs';
export async function git_exclude_ignore() {
    arguments_assert(arguments, []);
    let {lines} = await git_ignore_lines();
    let v = list_empty_not(lines);
    assert(v);
    for (let line of lines) {
        let v_2 = await path_exists(line);
        if (v_2) {
            await git_exclude(line);
        }
    }
}