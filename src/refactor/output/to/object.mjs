import { comment } from '../../../comment.mjs';
import { log } from '../../../log.mjs';
import { js_visit_nodes_filter_node } from '../../../js/visit/nodes/filter/node.mjs';
import { list_new_then } from '../../../list/new/then.mjs';
import { js_node_is_return_statment } from '../../../js/node/is/return/statment.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_body_get } from '../../../js/body/get.mjs';
import { assert } from '../../../assert.mjs';
import { list_length_is_1 } from '../../../list/length/is/1.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { list_single } from '../../../list/single.mjs';
export function refactor_output_to_object(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    let returns = list_new_then(function then(list_new_then_add) {
        js_visit_nodes_filter_node(parsed, js_node_is_return_statment, list_new_then_add);
    });
    comment(`If this fails code needs changing`);
    assert(list_length_is_1(returns));
    let return_single = list_single(returns);
    let body = js_body_get(parsed);
    console.log({function_declaration})
    assert(list_contains(body, return_single));
    console.log(returns);
}