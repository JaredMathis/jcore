import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function js_statement_end() {
    arguments_assert(arguments, []);
    return ';';
    metadata([]);
}