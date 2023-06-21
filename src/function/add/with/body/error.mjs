import { function_add_with_statement_code } from '../statement/code.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { error } from '../../../../error.mjs';
export async function function_add_with_body_error(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let error_statement_code = `${ function_name_get(error) }('todo: ${ function_name }');`;
    let v = await function_add_with_statement_code(function_name, error_statement_code);
    return v;
    metadata([]);
}