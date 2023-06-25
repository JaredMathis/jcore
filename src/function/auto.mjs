import { string_repeat_is } from '../string/repeat/is.mjs';
import { not } from '../not.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_auto_no_add } from './auto/no/add.mjs';
import { function_exists } from './exists.mjs';
import { function_add } from './add.mjs';
import { function_open_vs_code } from './open/vs/code.mjs';
import { assert_message } from '../assert/message.mjs';
export async function function_auto(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v_2 = string_repeat_is(function_name);
    let v = not(v_2);
    assert_message(v, `The function name has repetition - could be copy/paste error - code needs changing to bypass`);
    let v_3 = await function_exists(function_name);
    if (v_3) {
        await function_auto_no_add(function_name);
    } else {
        await function_add(function_name);
    }
    await function_open_vs_code(function_name);
    metadata([]);
}