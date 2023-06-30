import { command_line_website } from '../../../command/line/website.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_hub_token_new() {
    arguments_assert(arguments, []);
    let url = `https://github.com/settings/personal-access-tokens/new`;
    await command_line_website(url);
    metadata([]);
}