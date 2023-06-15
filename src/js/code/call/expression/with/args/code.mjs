import { js_code_parenthesis_surround } from '../../../../parenthesis/surround.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { string_is } from '../../../../../../string/is.mjs';
export function js_code_call_expression_with_args_code(name, args) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let surrounded = js_code_parenthesis_surround(args);
    return `${ name }${ surrounded }`;
    metadata([]);
}