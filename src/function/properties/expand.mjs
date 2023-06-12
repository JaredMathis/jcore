import { refactor_properties_expand } from '../../refactor/properties/expand.mjs';
import { string_identifier_multiple_parse } from '../../string/identifier/multiple/parse.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { function_name_get } from '../name/get.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../../string/is.mjs';
export async function function_properties_expand(function_name, identifier, prefix, properties_unparsed) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_identifier_is,
        string_is
    ]);
    let properties = string_identifier_multiple_parse(properties_unparsed);
    await function_map_with_args(function_name_get(refactor_properties_expand), function_name, {
        identifier,
        prefix,
        properties
    });
}