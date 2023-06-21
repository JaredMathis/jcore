import { js_identifier_is } from '../js/identifier/is.mjs';
import { function_import } from './import.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from '../list/is.mjs';
export async function function_run(function_name, function_args) {
    arguments_assert(arguments, [
        js_identifier_is,
        list_is
    ]);
    let imported = await function_import(import.meta, function_name);
    let imported_function = imported[function_name];
    let result = await imported_function(...function_args);
    return result;
    metadata([]);
}