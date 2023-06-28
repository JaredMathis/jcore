import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_token_bracket_right } from '../token/bracket/right.mjs';
import { js_token_bracket_left } from '../token/bracket/left.mjs';
import { string_combine } from '../../string/combine.mjs';
export function js_bracket_both() {
    arguments_assert(arguments, []);
    let v = js_token_bracket_left();
    let v_2 = js_token_bracket_right();
    let v_3 = string_combine(v, v_2);
    return v_3;
    metadata([]);
}