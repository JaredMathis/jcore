import { function_rename_generic } from './generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_rename_part() {
    arguments_assert(arguments, []);
    function predicate_should_rename(n) {
        
    }
    await function_rename_generic(predicate_should_rename, function_name_new_get);
    function function_name_new_get(n_old) {
    }
}