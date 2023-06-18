import { string_repeat_is } from '../string/repeat/is.mjs';
import { not } from '../not.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_auto_after } from './auto/after.mjs';
import { function_exists } from './exists.mjs';
import { function_add } from './add.mjs';
import { function_open_vs_code } from './open/vs/code.mjs';
import { assert_message } from '../assert/message.mjs';
export async function function_auto(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    assert_message(not(string_repeat_is(function_name)), `The function name has repetition - could be copy/paste error - code needs changing to bypass`);
    if (not(await function_exists(function_name))) {
        await function_add(function_name);
    } else {
        await function_auto_after(function_name);
    }
    await function_open_vs_code(function_name);
    metadata([]);
}