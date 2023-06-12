import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { string_split } from '../../../string/split.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { function_add_string } from '../string.mjs';
export function function_add_string_multiple(prefix, values) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_is
    ]);
    let split = string_split(values, ',');
    for (let value of split) {
        let function_name = '';
        for (let s of [prefix, function_name_separator(), value]) {
            function_name = string_add(function_name, s)
        }
        function_add_string(function_name, value);
    }
}