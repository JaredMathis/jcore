import { function_copy_before } from '../before.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { function_name_to_declaration } from '../../name/to/declaration.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_auto_no_add } from '../../auto/no/add.mjs';
import { js_id_name_set } from '../../../js/id/name/set.mjs';
import { function_add_with_declaration } from '../../add/with/declaration.mjs';
export async function function_copy_no_open(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    await function_copy_before(function_name_of_copy);
    let fd = await function_name_to_declaration(function_name_to_copy);
    js_id_name_set(fd, function_name_of_copy);
    await function_add_with_declaration(function_name_of_copy, fd);
    await function_auto_no_add(function_name_of_copy);
    metadata([]);
}