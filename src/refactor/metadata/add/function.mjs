import { defined_is } from '../../../defined/is.mjs';
import { refactor_metadata_add_named } from './named.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { function_is } from '../../../function/is.mjs';
export async function refactor_metadata_add_function(args, metadata_function) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    const metadata_function_name = function_name_get(metadata_function);
    await refactor_metadata_add_named(args, metadata_function_name);
}