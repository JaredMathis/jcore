import { not } from '../../../../../not.mjs';
import { log } from '../../../../../log.mjs';
import { function_callers_arguments_assert_auto_multiple_list } from './multiple/list.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
export async function function_callers_arguments_assert_auto_recursive(root) {
    arguments_assert(arguments, [js_identifier_is]);
    let result = [root];
    let result_previous;
    let v;
    do {
        result_previous = result;
        result = await function_callers_arguments_assert_auto_multiple_list(result, []);
        log({
            result_previous,
            result
        });
        v = not(json_equal(result, result_previous));
    } while (v);
}