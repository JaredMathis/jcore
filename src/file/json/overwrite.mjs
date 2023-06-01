import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { json_to } from '../../json/to.mjs';
import { file_overwrite } from '../overwrite.mjs';
export async function file_json_overwrite(data, file_path) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let json = json_to(data);
    await file_overwrite(file_path, json);
    metadata([]);
}