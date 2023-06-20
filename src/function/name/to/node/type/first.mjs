import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_parse } from '../../../../parse.mjs';
export async function function_name_to_node_type_first(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let parsed = function_parse(function_name);
    return result;
}