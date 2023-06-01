import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { command_line } from '../../../command/line.mjs';
export async function file_open_vs_code(function_path) {
    arguments_assert(arguments, [tautology]);
    await command_line(`code ${ function_path }`);
    metadata([]);
}