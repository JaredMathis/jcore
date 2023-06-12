import { function_add_string } from '../string.mjs';
import { string_add_multiple } from '../../../string/add/multiple.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export function function_add_string_prefix(prefix, value) {
    const strings = [
        prefix,
        function_name_separator(),
        value
    ];
    let function_name = string_add_multiple(strings);
    function_add_string(function_name, value);
}