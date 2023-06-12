import { js_node_property_properties } from '../../../js/node/property/properties.mjs';
import { js_node_property_argument } from '../../../js/node/property/argument.mjs';
import { js_statement_end } from '../../../js/statement/end.mjs';
import { js_keyword_return } from '../../../js/keyword/return.mjs';
import { js_function_declaration_to_statements } from '../../../js/function/declaration/to/statements.mjs';
import { comment } from '../../../comment.mjs';
import { log } from '../../../log.mjs';
import { js_visit_nodes_filter_node } from '../../../js/visit/nodes/filter/node.mjs';
import { list_new_then } from '../../../list/new/then.mjs';
import { js_node_is_return_statment } from '../../../js/node/is/return/statment.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { list_length_is_1 } from '../../../list/length/is/1.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { list_single } from '../../../list/single.mjs';
import { string_a } from '../../../string/a.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function refactor_output_to_object(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    let returns = list_new_then(function then(list_new_then_add) {
        js_visit_nodes_filter_node(parsed, js_node_is_return_statment, list_new_then_add);
    });
    comment(`If this fails code needs changing`);
    assert(list_length_is_1(returns));
    let return_single = list_single(returns);
    let statements = js_function_declaration_to_statements(function_declaration);
    assert(list_contains(statements, return_single));
    const return_expression = `{ ${ string_a() } }`;
    let object = js_code_(return_expression);
    let arg = object_property_get(object, js_node_property_argument());
    let properties = object_property_get(arg, js_node_property_properties());
    console.log({ properties });
}

function js_code_(return_expression) {
    return js_parse_statement(`${js_keyword_return()} ${return_expression}${js_statement_end()}`);
}
