import { list_last } from '../../../list/last.mjs';
import { js_unparse } from '../../../js/unparse.mjs';
import { js_nodes_get } from '../../../js/nodes/get.mjs';
import { js_return_statement_argument } from '../../../js/return/statement/argument.mjs';
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
import { log } from '../../../log.mjs';
import { js_node_is_identifier } from '../../../js/node/is/identifier.mjs';
export function refactor_output_to_object(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    let returns = js_nodes_get(parsed, js_node_is_return_statment);
    comment(`If this fails code needs changing`);
    assert(list_length_is_1(returns));
    let return_single = list_single(returns);
    let return_single_argument = js_return_statement_argument(return_single);
    comment(`Needs to be identifier - maybe convert to identifier in the future if not`);
    assert(js_node_is_identifier(return_single_argument));
    let statements = js_function_declaration_to_statements(function_declaration);
    console.log({
        l: list_last(statements),
        return_single
    });
    comment(`If this fails code needs changing - needs to be 1 return statement per function`);
    assert(list_contains(statements, return_single));
    const return_expression = `{ ${ string_a() } }`;
    let object = js_code_return_statement(return_expression);
    let arg = js_return_statement_argument(object);
    let properties = object_property_get(arg, js_node_property_properties());
    log(js_unparse(object));
    return args;
}