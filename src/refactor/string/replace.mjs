import { log } from '../../log.mjs';
import { js_visit_nodes_all } from '../../js/visit/nodes/all.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function refactor_string_replace(args) {
    arguments_assert(arguments, [defined_is]);
    let {string_value, replacement_function_name, parsed} = args;
    js_visit_nodes_all(parsed, v => {
        console.log({ v });
    });
}