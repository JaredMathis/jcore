import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_code_function_name_to_export } from './export.mjs';
import { js_parse } from '../../../../parse.mjs';
export function js_code_function_name_to_parsed(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let v = js_code_function_name_to_export(function_name);
    let v_2 = js_parse(v);
    return v_2;
    metadata([]);
}