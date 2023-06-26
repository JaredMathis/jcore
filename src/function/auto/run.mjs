import { metadata } from '../../metadata.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { function_auto } from '../auto.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_run } from '../run.mjs';
export async function function_auto_run(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    await function_auto(function_name);
    let v_2 = [];
    let v = await function_run(function_name, v_2);
    return v;
    metadata([]);
}