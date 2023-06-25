import { not } from '../not.mjs';
import { string_empty_not_is } from '../string/empty/not/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { command_line_try } from './line/try.mjs';
import { log } from '../log.mjs';
export async function command_line(command) {
    arguments_assert(arguments, [string_empty_not_is]);
    let result = await command_line_try(command);
    let v_2 = result.success;
    let v = not(v_2);
    if (v) {
        log(result);
    }
    let v_3 = result.success;
    assert(v_3);
    return result;
    metadata([]);
}