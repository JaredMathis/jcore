import { metadata } from '../../../metadata.mjs';
import { refactor_output_to_object } from '../../../refactor/output/to/object.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map } from '../../map.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
export async function function_output_to_object(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = function_name_get(refactor_output_to_object);
    await function_map(v, function_name);
    metadata([]);
}