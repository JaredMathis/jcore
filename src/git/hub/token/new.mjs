import { metadata } from '../../../metadata.mjs';
import { command_line } from '../../../command/line.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_hub_token_new() {
    arguments_assert(arguments, []);
    let v = `start https://github.com/settings/personal-access-tokens/new`;
    await command_line(v);
    metadata([]);
}