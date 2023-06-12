import { arguments_assert } from '../../arguments/assert.mjs';
import { git_ignore_lines } from '../ignore/lines.mjs';
export async function git_exclude_ignore() {
    arguments_assert(arguments, []);
    let {lines} = await git_ignore_lines();
}