import { metadata } from '../metadata.mjs';
import { git_command_name } from './command/name.mjs';
import { command_line_try } from '../command/line/try.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function git_rhh() {
    arguments_assert(arguments, []);
    let v = `${ git_command_name() } reset --hard HEAD`;
    await command_line_try(v);
    metadata([]);
}