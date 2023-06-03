import { string_empty_not_is } from '../../string/empty/not/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { command_line } from '../line.mjs';
export async function command_line_try(command_text) {
    arguments_assert(arguments, [string_empty_not_is]);
    await command_line(command_text);
    metadata([]);
}