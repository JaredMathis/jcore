import { function_add_with_statement } from '../statement.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { error } from '../../../../error.mjs';
export async function function_add_with_body_error(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let error_statement_code = `${ function_name_get(error) }('todo: ${ function_name }');`;
    return await function_add_with_statement(function_name, error_statement_code);
    metadata([]);
}