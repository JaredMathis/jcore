import { js_token_parenthesis_right } from '../../token/parenthesis/right.mjs';
import { js_token_parenthesis_left } from '../../token/parenthesis/left.mjs';
export function js_code_parenthesis_surround(code_in_between_the_parenthesis) {
    let v = js_token_parenthesis_left();
    let v_2 = js_token_parenthesis_right();
    return `${ v }${ code_in_between_the_parenthesis }${ v_2 }`;
}