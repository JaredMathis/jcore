import { function_to_declaration } from '../../to/declaration.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_auto_after } from '../../auto/after.mjs';
import { js_id_name_set } from '../../../js/id/name/set.mjs';
import { function_add_with_declaration } from '../../add/with/declaration.mjs';
export async function function_copy_no_open(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let fd = await function_to_declaration(function_name_to_copy);
    js_id_name_set(fd, function_name_of_copy);
    await function_add_with_declaration(function_name_of_copy, fd);
    await function_auto_after(function_name_of_copy);
    metadata([]);
}