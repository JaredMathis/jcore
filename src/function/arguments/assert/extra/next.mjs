import { function_names_each } from '../../../names/each.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_visit_nodes } from '../../../../js/visit/nodes.mjs';
export async function function_arguments_assert_extra_next() {
    arguments_assert(arguments, []);
    await function_names_each(logic);
    function logic(parsed) {
        js_visit_nodes(parsed);
    }
}