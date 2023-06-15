import { js_token_parenthesis_right } from '../../../../../token/parenthesis/right.mjs';
import { js_token_parenthesis_left } from '../../../../../token/parenthesis/left.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { string_is } from '../../../../../../string/is.mjs';
export function js_code_call_expression_with_args_code(name, args) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return `${ name }${ js_token_parenthesis_left() }${ args }${ js_token_parenthesis_right() }`;
    metadata([]);
}