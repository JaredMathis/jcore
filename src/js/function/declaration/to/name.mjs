import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_id_name_get } from '../../../id/name/get.mjs';
export function js_function_declaration_to_name(fd) {
    arguments_assert(arguments, [tautology]);
    return js_id_name_get(fd);
    metadata([]);
}