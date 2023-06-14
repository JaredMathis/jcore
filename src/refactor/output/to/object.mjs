import { object_property_change } from '../../../object/property/change.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { js_nodes_get } from '../../../js/nodes/get.mjs';
import { js_return_statement_argument_get } from '../../../js/return/statement/argument/get.mjs';
import { js_code_return_statement } from '../../../js/code/return/statement.mjs';
import { js_node_property_properties } from '../../../js/node/property/properties.mjs';
import { js_function_declaration_to_statements } from '../../../js/function/declaration/to/statements.mjs';
import { comment } from '../../../comment.mjs';
import { js_node_is_return_statment } from '../../../js/node/is/return/statment.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { list_length_is_1 } from '../../../list/length/is/1.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { list_single } from '../../../list/single.mjs';
import { string_a } from '../../../string/a.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is_identifier } from '../../../js/node/is/identifier.mjs';
import { js_node_property_key } from '../../../js/node/property/key.mjs';
import { js_node_property_value } from '../../../js/node/property/value.mjs';
export function refactor_output_to_object(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    let returns = js_nodes_get(parsed, js_node_is_return_statment);
    comment(`If this fails code needs changing`);
    assert(list_length_is_1(returns));
    let return_single = list_single(returns);
    let return_single_argument = js_return_statement_argument_get(return_single);
    comment(`Needs to be identifier - maybe convert to identifier in the future if not`);
    assert(js_node_is_identifier(return_single_argument));
    let statements = js_function_declaration_to_statements(function_declaration);
    comment(`If this fails code needs changing - needs to be 1 return statement per function`);
    assert(list_contains(statements, return_single));
    const return_expression = `{ ${ string_a() } }`;
    let object_code = js_code_return_statement(return_expression);
    let object = js_parse_statement(object_code);
    let arg = js_return_statement_argument_get(object);
    let properties = object_property_get(arg, js_node_property_properties());
    let property_single = list_single(properties);
    for (let property of [
            js_node_property_key(),
            js_node_property_value()
        ]) {
        object_property_change(property_single, property, return_single_argument);
    }
    return args;
}