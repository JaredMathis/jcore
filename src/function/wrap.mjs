import { js_function_declaration_async_is } from '../js/function/declaration/async/is.mjs';
import { js_function_declaration_to_params_names } from '../js/function/declaration/to/params/names.mjs';
import { function_add_with_statements_synchronized } from './add/with/statements/synchronized.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { error } from '../error.mjs';
import { function_to_declaration } from './to/declaration.mjs';
export async function function_wrap(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let function_declaration = await function_to_declaration(function_name_to_wrap);
    let inputs = js_function_declaration_to_params_names(function_declaration);
    let statements = error();
    let is_async = js_function_declaration_async_is(function_declaration);
    function_add_with_statements_synchronized(function_name_to_add, statements, is_async);
}