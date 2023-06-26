import { not } from '../../../../../not.mjs';
import { function_tests_generated } from '../../../generated.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { function_delete } from '../../../../delete.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_empty } from '../../../../../list/empty.mjs';
import { tests_generate } from '../../../../../tests/generate.mjs';
import { assert } from '../../../../../assert.mjs';
import { function_exists } from '../../../../exists.mjs';
export async function function_tests_generated_delete_no_after(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = await function_exists(function_name);
    assert(v);
    let generateds = await function_tests_generated(function_name);
    let v_3 = list_empty(generateds);
    let v_2 = not(v_3);
    if (v_2) {
        for (let g of generateds) {
            await function_delete(g);
        }
        await tests_generate();
    }
    return generateds;
}