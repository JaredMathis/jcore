import { js_brace_left_right } from '../../brace/left/right.mjs';
import { js_code_parenthesis_surround } from '../parenthesis/surround.mjs';
import { js_keyword_function } from '../../keyword/function.mjs';
export function js_code_function_named(name) {
    return `${ js_keyword_function() } ${ name }${ js_code_parenthesis_surround(``) }${ js_brace_left_right() }`;
}