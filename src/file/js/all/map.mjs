import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_js_filered_map } from '../filered/map.mjs';
import { tautology } from '../../../tautology.mjs';
export async function file_js_all_map(function_name_mapper) {
    arguments_assert(arguments, [js_identifier_is]);
    await file_js_filered_map(function_name_mapper, tautology);
    metadata([]);
}