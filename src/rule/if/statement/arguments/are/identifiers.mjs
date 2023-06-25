import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { js_node_is_if_statement } from '../../../../../js/node/is/if/statement.mjs';
import { error } from '../../../../../error.mjs';
export async function rule_if_statement_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each_map(args => {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_if_statement, node => {
            error({ node });
        });
    });
}