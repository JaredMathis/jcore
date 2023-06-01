import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { command_line_check } from './line/check.mjs';
export async function command_line(command) {
    arguments_assert(arguments, [tautology]);
    let result = await command_line_check(command);
    assert(result.success);
    return result;
    metadata([]);
}