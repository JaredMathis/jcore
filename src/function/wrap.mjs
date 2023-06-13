import { function_add_with_statements_synchronized } from './add/with/statements/synchronized.mjs';
import { function_inputs } from './inputs.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { error } from '../error.mjs';
import { function_to_declaration } from './to/declaration.mjs';
export async function function_wrap(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let inputs = await function_inputs(function_name_to_wrap);
    let function_declaration = await function_to_declaration(function_name_to_wrap);
    let statements = error();
    let is_async = error();
    function_add_with_statements_synchronized(function_name_to_add, statements, is_async);
}