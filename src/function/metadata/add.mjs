import { metadata_prefix } from '../../metadata/prefix.mjs';
import { refactor_metadata_add } from '../../refactor/metadata/add.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map } from '../map.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { assert } from '../../assert.mjs';
import { string_starts_with } from '../../string/starts/with.mjs';
export async function function_metadata_add(function_name, metadata_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    assert(string_starts_with(metadata_name, metadata_prefix()));
    await function_map(function_name_get(refactor_metadata_add), function_name);
}