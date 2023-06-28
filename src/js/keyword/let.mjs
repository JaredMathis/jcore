import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function js_keyword_let() {
    arguments_assert(arguments, []);
    return `let`;
    metadata([]);
}