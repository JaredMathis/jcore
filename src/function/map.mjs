import { function_map_with_args } from './map/with/args.mjs';
import { metadata } from '../metadata.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_map(function_name_mapper, function_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_map_with_args(function_name, function_name_mapper, {});
    metadata([]);
}