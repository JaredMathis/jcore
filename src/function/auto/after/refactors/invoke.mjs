import { refactor_multiple } from '../../../../refactor/multiple.mjs';
import { function_auto_after_refactors } from '../refactors.mjs';
export async function function_auto_after_refactors_invoke(args) {
    let refactors = function_auto_after_refactors();
    await refactor_multiple(args, refactors);
}