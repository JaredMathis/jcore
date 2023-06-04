import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_function_name_to_export } from '../../../../function/name/to/export.mjs';
import { js_parse } from '../../../../parse.mjs';
export function js_code_function_name_to_parsed(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    return js_parse(js_function_name_to_export(function_name));
    metadata([]);
}