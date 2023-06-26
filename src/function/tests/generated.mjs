import { js_identifier_is } from '../../js/identifier/is.mjs';
import { function_tests_all } from './all.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_filter } from '../../list/filter.mjs';
import { string_includes } from '../../string/includes.mjs';
import { function_tests_generated_string_sub } from './generated/string/sub.mjs';
export async function function_tests_generated(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let result = await function_tests_all(function_name);
    let v_4 = function v(r) {
        let v_2 = function_tests_generated_string_sub();
        let v_3 = string_includes(r, v_2);
        return v_3;
    };
    let generated = list_filter(result, v_4);
    return generated;
}