import { string_empty_not_is } from '../string/empty/not/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { command_line_check } from './line/check.mjs';
import { log } from '../log.mjs';
export async function command_line(command) {
    arguments_assert(arguments, [string_empty_not_is]);
    let result = await command_line_check(command);
    if (!result.success) {
        log(result)
    }
    assert(result.success);
    return result;
    metadata([]);
}