import { metadata } from '../../../metadata.mjs';
import { js_brace_both } from '../../brace/both.mjs';
import { js_code_parenthesis_surround } from '../parenthesis/surround.mjs';
import { js_keyword_function } from '../../keyword/function.mjs';
export function js_code_function_named(name) {
    let v = js_keyword_function();
    let v_2 = ``;
    let v_3 = js_code_parenthesis_surround(v_2);
    let v_4 = js_brace_both();
    return `${ v } ${ name }${ v_3 }${ v_4 }`;
    metadata([]);
}