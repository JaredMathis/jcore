import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { file_write } from '../write.mjs';
import { js_unparse } from '../../js/unparse.mjs';
export async function file_js_write(function_path, parsed) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let unparsed = js_unparse(parsed);
    await file_write(function_path, unparsed);
    metadata([]);
}