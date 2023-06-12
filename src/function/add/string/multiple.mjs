import { equal_by } from '../../../equal/by.mjs';
import { function_add_string_prefix } from './prefix.mjs';
import { string_identifier_multiple_parse } from '../../../string/identifier/multiple/parse.mjs';
import { string_is } from '../../../string/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { list_length } from '../../../list/length.mjs';
export function function_add_string_multiple(prefix, keys, values) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_is,
        string_is
    ]);
    assert(equal_by(list_length, keys, values));
    let split = string_identifier_multiple_parse(values);
    for (let value of split) {
        function_add_string_prefix(prefix, value);
    }
}