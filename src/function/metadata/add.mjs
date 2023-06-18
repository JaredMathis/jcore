import { function_map_with_args } from '../map/with/args.mjs';
import { refactor_metadata_add } from '../../refactor/metadata/add.mjs';
import { function_name_get } from '../name/get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export async function function_metadata_add(function_name, metadata_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let v = function_name_get(refactor_metadata_add);
    await function_map_with_args(v, function_name, { metadata_name });
}