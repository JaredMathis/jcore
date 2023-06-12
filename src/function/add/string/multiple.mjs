import { string_add_multiple } from '../../../string/add/multiple.mjs';
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
        const strings = [
            prefix,
            function_name_separator(),
            value
        ];
        let function_name = string_add_multiple(strings);
        function_add_string(function_name, value);
    }
}