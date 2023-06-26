import { function_map_with_args } from '../map/with/args.mjs';
import { refactor_metadata_add } from '../../refactor/metadata/add.mjs';
import { function_name_get } from '../name/get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
export async function function_metadata_add(function_name, metadata_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let v = function_name_get(refactor_metadata_add);
    let v_2 = { metadata_name };
    await function_map_with_args(v, function_name, v_2);
}