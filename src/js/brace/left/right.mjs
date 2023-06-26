import { metadata } from '../../../metadata.mjs';
import { js_token_brace_right } from '../../token/brace/right.mjs';
import { js_token_brace_left } from '../../token/brace/left.mjs';
export function js_brace_left_right() {
    let v = js_token_brace_left();
    let v_2 = js_token_brace_right();
    return `${ v }${ v_2 }`;
    metadata([]);
}