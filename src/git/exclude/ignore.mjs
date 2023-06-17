import { git_exclude } from '../exclude.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_empty } from '../../list/empty.mjs';
import { git_ignore_lines } from '../ignore/lines.mjs';
import { path_exists } from '../../path/exists.mjs';
export async function git_exclude_ignore() {
    arguments_assert(arguments, []);
    let {lines} = await git_ignore_lines();
    assert(!(list_empty(lines)));
    for (let line of lines) {
        if (await path_exists(line)) {
            await git_exclude(line);
        }
    }
}