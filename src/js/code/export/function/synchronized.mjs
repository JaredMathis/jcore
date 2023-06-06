import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_length } from '../../../../string/length.mjs';
import { assert } from '../../../../assert.mjs';
import { js_keyword_async } from '../../../keyword/async.mjs';
import { string_empty } from '../../../../string/empty.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
import { string_is } from '../../../../string/is.mjs';
export function js_code_export_function_synchronized(function_name, is_async, function_statements_code) {
    arguments_assert(arguments, [
        string_identifier_is,
        boolean_is,
        string_is
    ]);
    assert(string_length(function_name) >= 1);
    let async_code = string_empty();
    if (is_async) {
        async_code = js_keyword_async();
    }
    let result = `export ${ async_code } function ${ function_name }() { ${ function_statements_code } }`;
    return result;
    metadata([]);
}