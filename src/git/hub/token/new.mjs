import { command_line } from '../../../command/line.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_hub_token_new() {
    arguments_assert(arguments, []);
    await command_line(`start https://github.com/settings/personal-access-tokens/new`);
}