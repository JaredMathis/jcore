import { string_identifier_with_prefix } from '../../string/identifier/with/prefix.mjs';
import { log } from '../../log.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { list_map } from '../../list/map.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {identifier, properties, prefix} = args;
    let mapped = list_map(properties, string_identifier_with_prefix);
    console.log({
        identifier,
        mapped,
        prefix
    });
}