import { function_add_string_prefix } from './prefix.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { string_split } from '../../../string/split.mjs';
export function function_add_string_multiple(prefix, values) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_is
    ]);
    let split = string_split(values, ',');
    for (let value of split) {
        function_add_string_prefix(prefix, value);
    }
}