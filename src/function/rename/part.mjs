import { string_identifier_parts_from } from '../../string/identifier/parts/from.mjs';
import { function_rename_generic } from './generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_rename_part() {
    arguments_assert(arguments, []);
    function predicate_should_rename(n) {
        let parts = string_identifier_parts_from(n);
    }
    await function_rename_generic(predicate_should_rename, function_name_new_get);
    function function_name_new_get(n_old) {
    }
}