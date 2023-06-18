import { list_is } from '../../../list/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_add_with_statements_synchronized } from './statements/synchronized.mjs';
export async function function_add_with_statements(function_name, statements) {
    arguments_assert(arguments, [
        string_identifier_is,
        list_is
    ]);
    let is_async = false;
    let v = await function_add_with_statements_synchronized(function_name, statements, is_async);
    return v;
    metadata([]);
}