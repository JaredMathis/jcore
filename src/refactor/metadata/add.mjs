import { refactor_metadata_add_function } from './add/function.mjs';
import { refactor_metadata_missing_add } from './missing/add.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { tautology } from '../../tautology.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export async function refactor_metadata_add(args) {
    arguments_assert(arguments, [tautology]);
    await refactor_metadata_missing_add(args);
    let name = object_property_get(args, 'metadata_name');
    await refactor_metadata_add_function(args, name);
}