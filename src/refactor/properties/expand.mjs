import { string_sub } from '../../string/sub.mjs';
import { list_map_property } from '../../list/map/property.mjs';
import { string_case_upper_is } from '../../string/case/upper/is.mjs';
import { list_filter_property } from '../../list/filter/property.mjs';
import { list_map_with_index } from '../../list/map/with/index.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_to_list } from '../../string/to/list.mjs';
import { list_new_then } from '../../list/new/then.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    const node_type = 'ObjectPattern';
    let characters = string_to_list(node_type);
    const property_is_capital = 'is_capital';
    const property_index = 'index';
    let mapped = list_map_with_index(characters, (c, index) => {
        return {
            [property_is_capital]: string_case_upper_is(c),
            [index]: index
        };
    });
    let filtered = list_filter_property(mapped, property_is_capital, true);
    let indices = list_map_property(filtered, index);
    list_new_then(list_new_then_add => {
        let previous = 0;
        for (let index of indices) {
            let part = string_sub(node_type, previous, index);
            list_new_then_add(part);
            previous = index;
        }
    });
}