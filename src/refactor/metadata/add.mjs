import { metadata_prefix } from '../../metadata/prefix.mjs';
import { string_starts_with } from '../../string/starts/with.mjs';
import { assert } from '../../assert.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { tautology } from '../../tautology.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { refactor_metadata_add_named } from './add/named.mjs';
export async function refactor_metadata_add(args) {
    arguments_assert(arguments, [tautology]);
    let name = object_property_get(args, 'metadata_name');
    assert(!string_starts_with(name, metadata_prefix()));
    let prefixed = `${ metadata_prefix() }${ name }`;
    await refactor_metadata_add_named(args, prefixed);
}