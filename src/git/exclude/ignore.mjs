import { git_exclude } from '../exclude.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { git_ignore_lines } from '../ignore/lines.mjs';
export async function git_exclude_ignore() {
    arguments_assert(arguments, []);
    let {lines} = await git_ignore_lines();
    assert(!list_length_is_0(lines));
    for (let line of lines) {
        await git_exclude(line);
    }
}