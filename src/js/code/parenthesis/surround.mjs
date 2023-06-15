import { js_token_parenthesis_right } from '../../token/parenthesis/right.mjs';
import { js_token_parenthesis_left } from '../../token/parenthesis/left.mjs';
export function js_code_parenthesis_surround(code_in_between_the_parenthesis) {
    return `${ js_token_parenthesis_left() }${ code_in_between_the_parenthesis }${ js_token_parenthesis_right() }`;
}