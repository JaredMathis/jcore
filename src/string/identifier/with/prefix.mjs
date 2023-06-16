import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_add_multiple } from '../../add/multiple.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { string_identifier_is } from '../is.mjs';
export function string_identifier_with_prefix(prefix, identifier) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    const strings = [
        prefix,
        function_name_separator(),
        identifier
    ];
    let result = string_add_multiple(strings);
    return result;
}