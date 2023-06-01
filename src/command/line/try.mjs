import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { command_line } from '../line.mjs';
export async function command_line_try(command_text) {
    arguments_assert(arguments, [tautology]);
    await command_line(command_text);
    metadata([]);
}