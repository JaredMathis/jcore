import { string_add_multiple } from '../../add/multiple.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
export function string_identifier_with_prefix(prefix, identifier) {
    const strings = [
        prefix,
        function_name_separator(),
        identifier
    ];
    let function_name = string_add_multiple(strings);
    return function_name;
}