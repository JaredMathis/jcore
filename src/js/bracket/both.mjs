import { js_token_bracket_right } from '../token/bracket/right.mjs';
import { js_token_bracket_left } from '../token/bracket/left.mjs';
import { string_combine } from '../../string/combine.mjs';
export function js_bracket_both() {
    return string_combine(js_token_bracket_left(), js_token_bracket_right());
    metadata([]);
}