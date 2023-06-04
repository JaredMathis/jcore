import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
import { function_callers_arguments_assert_auto } from '../../auto.mjs';
export async function function_callers_arguments_assert_auto_multiple_list(multiple, result) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let m of multiple) {
        let r = await function_callers_arguments_assert_auto(m);
        list_add_multiple(result, r);
    }
    return result;
}