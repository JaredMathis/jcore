import { js_prefix } from '../prefix.mjs';
import { js_identifier_combine } from '../identifier/combine.mjs';
export function js_prefix_generic(suffix) {
    return js_identifier_combine(js_prefix(), suffix);
}