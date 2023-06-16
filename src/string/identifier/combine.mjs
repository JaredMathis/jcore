import { string_identifier_first_not_is } from './first/not/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_add_multiple } from '../add/multiple.mjs';
import { function_name_separator } from '../../function/name/separator.mjs';
import { string_identifier_is } from './is.mjs';
export function string_identifier_combine(prefix, identifier) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_first_not_is
    ]);
    const strings = [
        prefix,
        function_name_separator(),
        identifier
    ];
    let result = string_add_multiple(strings);
    return result;
}