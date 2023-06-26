import { function_map_with_args } from './map/with/args.mjs';
import { metadata } from '../metadata.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_map(function_name_mapper, function_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let v = {};
    await function_map_with_args(function_name_mapper, function_name, v);
    metadata([]);
}