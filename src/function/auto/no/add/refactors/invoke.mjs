import { defined_is } from '../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { refactor_multiple } from '../../../../../refactor/multiple.mjs';
import { function_auto_no_add_refactors } from '../refactors.mjs';
export async function function_auto_no_add_refactors_invoke(args) {
    arguments_assert(arguments, [defined_is]);
    let refactors = function_auto_no_add_refactors();
    await refactor_multiple(args, refactors);
}