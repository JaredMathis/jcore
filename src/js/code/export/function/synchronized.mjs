import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { string_length_at_least } from '../../../../string/length/at/least.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { assert } from '../../../../assert.mjs';
import { js_keyword_asynk } from '../../../keyword/asynk.mjs';
import { string_empty } from '../../../../string/empty.mjs';
import { js_identifier_is } from '../../../identifier/is.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
import { string_is } from '../../../../string/is.mjs';
export function js_code_export_function_synchronized(function_name, is_async, function_statements_code) {
    arguments_assert(arguments, [
        js_identifier_is,
        boolean_is,
        string_is
    ]);
    const at_least = integer_value_1();
    let v = string_length_at_least(function_name, at_least);
    assert(v);
    let async_code = string_empty();
    if (is_async) {
        async_code = js_keyword_asynk();
    }
    let result = `export ${ async_code } function ${ function_name }() { ${ function_statements_code } }`;
    return result;
    metadata([]);
}