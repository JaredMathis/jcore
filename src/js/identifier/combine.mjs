import { js_identifier_first_not_is } from './first/not/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_combine_multiple } from '../../string/combine/multiple.mjs';
import { function_name_separator } from '../../function/name/separator.mjs';
import { js_identifier_is } from './is.mjs';
export function js_identifier_combine(first, second) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_first_not_is
    ]);
    const strings = [
        first,
        function_name_separator(),
        second
    ];
    let result = string_combine_multiple(strings);
    return result;
}