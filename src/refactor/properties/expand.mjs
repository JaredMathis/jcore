import { list_map_with_index } from '../../list/map/with/index.mjs';
import { equal } from '../../equal.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_to_list } from '../../string/to/list.mjs';
import { string_letter_is } from '../../string/letter/is.mjs';
import { string_to_case_upper } from '../../string/to/case/upper.mjs';
import { list_filter } from '../../list/filter.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    const node_type = 'ObjectPattern';
    let characters = string_to_list(node_type);
    const property_is_capital = 'is_capital';
    let mapped = list_map_with_index(characters, (c, index) => {
        return {
            [property_is_capital]: string_letter_is(c) && equal(string_to_case_upper(c), c),
            value: c,
            index
        };
    });
    let filtered = list_filter(mapped, m => object_property_get(m, property_is_capital));
}