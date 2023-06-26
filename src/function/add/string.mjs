import { metadata } from '../../metadata.mjs';
import { function_add_return } from './return.mjs';
import { js_code_expression_string } from '../../js/code/expression/string.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { string_is } from '../../string/is.mjs';
export async function function_add_string(function_name, string_value) {
    arguments_assert(arguments, [
        js_identifier_is,
        string_is
    ]);
    let expression_code = js_code_expression_string(string_value);
    let v_2 = await function_add_return(function_name, expression_code);
    return v_2;
    metadata([]);
}