import { metadata } from '../../../../../metadata.mjs';
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
        const v_3 = [];
        result = await function_callers_arguments_assert_auto_multiple_list(result, v_3);
        let v_4 = {
            result_previous,
            result
        };
        log(v_4);
        const v_2 = json_equal(result, result_previous);
        v = not(v_2);
    } while (v);
    metadata([]);
}