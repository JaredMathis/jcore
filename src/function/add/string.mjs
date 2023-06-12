import { function_add } from '../add.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function function_add_string() {
    arguments_assert(arguments, []);
    function_add();
}