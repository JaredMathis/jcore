import { error } from '../error.mjs';

import { assert } from '../assert.mjs';
import { command_line_check } from './line/check.mjs';
export async function command_line(command) {
    let result = await command_line_check(command);
    assert(result.success);
    return result;
}
