import { function_import } from './import.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export async function function_run(function_name, args) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let import_meta = import.meta;
    let imported = await function_import(import_meta, function_name);
    let imported_function = imported[function_name];
    let result = await imported_function(...args);
    return result;
    metadata([]);
}