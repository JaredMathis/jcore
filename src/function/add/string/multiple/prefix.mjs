import { metadata } from '../../../../metadata.mjs';
import { js_identifier_multiple_parse } from '../../../../js/identifier/multiple/parse.mjs';
import { function_add_string_prefix } from '../prefix.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { string_is } from '../../../../string/is.mjs';
export function function_add_string_multiple_prefix(prefix, values) {
    arguments_assert(arguments, [
        js_identifier_is,
        string_is
    ]);
    let split = js_identifier_multiple_parse(values);
    for (let value of split) {
        function_add_string_prefix(prefix, value);
    }
    metadata([]);
}