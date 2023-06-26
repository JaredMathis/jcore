import { js_brace_left_right } from '../../brace/left/right.mjs';
import { js_code_parenthesis_surround } from '../parenthesis/surround.mjs';
import { js_keyword_function } from '../../keyword/function.mjs';
export function js_code_function_named(name) {
    let v = js_keyword_function();
    let v_2 = ``;
    let v_3 = js_code_parenthesis_surround(v_2);
    let v_4 = js_brace_left_right();
    return `${ v } ${ name }${ v_3 }${ v_4 }`;
}