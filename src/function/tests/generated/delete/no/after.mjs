import { not } from '../../../../../not.mjs';
import { function_tests_generated } from '../../../generated.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { function_delete } from '../../../../delete.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_empty } from '../../../../../list/empty.mjs';
import { tests_generate } from '../../../../../tests/generate.mjs';
import { assert } from '../../../../../assert.mjs';
import { function_exists } from '../../../../exists.mjs';
export async function function_tests_generated_delete_no_after(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    assert(await function_exists(function_name))
    let generateds = await function_tests_generated(function_name);
    if (not(list_empty(generateds))) {
        for (let g of generateds) {
            await function_delete(g);
        }
        await tests_generate();
    }
    return generateds;
}