import { metadata } from '../../../metadata.mjs';
import { refactor_metadata_add_named } from './named.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { function_is } from '../../../function/is.mjs';
import { js_mapper_args_is } from '../../../js/mapper/args/is.mjs';
export async function refactor_metadata_add_function(args, metadata_function) {
    arguments_assert(arguments, [
        js_mapper_args_is,
        function_is
    ]);
    const metadata_function_name = function_name_get(metadata_function);
    await refactor_metadata_add_named(args, metadata_function_name);
    metadata([]);
}