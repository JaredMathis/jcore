import { error } from '../error.mjs';
import { exec } from 'child_process';
import { assert } from '../assert.mjs';
export async function command_line(command) {
    let result = await command_line_check(command);
    assert(result.success);
    return result;
}

x