import { js_node_property_elements } from '../../../../js/node/property/elements.mjs';
import { list_each_with_index } from '../../../../list/each/with/index.mjs';
import { arguments_assert_predicate_default } from '../../../../arguments/assert/predicate/default.mjs';
import { js_node_property_name } from '../../../../js/node/property/name.mjs';
import { js_node_property_arguments } from '../../../../js/node/property/arguments.mjs';
import { js_statement_expression_to_expression } from '../../../../js/statement/expression/to/expression.mjs';
import { function_parse_to_declaration } from '../../../parse/to/declaration.mjs';
import { log } from '../../../../log.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_callers } from '../../../callers.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { equal } from '../../../../equal.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../../../../js/mapper/args/to/statement/arguments/assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_property_name_params } from '../../../../js/property/name/params.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { assert } from '../../../../assert.mjs';
import { js_node_is_identifier } from '../../../../js/node/is/identifier.mjs';
import { comment } from '../../../../comment.mjs';
import { list_get } from '../../../../list/get.mjs';
import { function_name_get } from '../../../name/get.mjs';
export async function function_callers_arguments_assert_auto(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let callers = await function_callers(function_name);
    for (let c of callers) {
        if (equal(function_name, c)) {
            continue;
        }
        let function_declaration = await function_parse_to_declaration(c);
        let params = object_property_get(function_declaration, js_property_name_params());
        if (list_length_is_0(params)) {
            continue;
        }
        let arguments_assert_statement = await js_mapper_args_to_statement_arguments_assert({ function_declaration });
        let arguments_assert_call_expression = js_statement_expression_to_expression(arguments_assert_statement);
        const arguments_assert_args = object_property_get(arguments_assert_call_expression, js_node_property_arguments());
        let array_expression = list_get(arguments_assert_args, 1);
        let args = object_property_get(array_expression, js_node_property_elements());
        list_each_with_index(args, function lambda(arg, index) {
            comment(`If this isn't true then this code needs changing`);
            assert(js_node_is_identifier(arg));
            let predicate_name = object_property_get(arg, js_node_property_name());
            let default_name =  function_name_get(arguments_assert_predicate_default())
            console.log({ predicate_name, default_name });
            if (equal(predicate_name,default_name)) {
                let arguments_assert_arg_identifier = list_get(params, index);
                let arguments_assert_arg_identifier_name = object_property_get(arguments_assert_arg_identifier, 'name')
                console.log({ i: arguments_assert_arg_identifier });
            }
        });
        let arguments_assert_statement_predicates = [];
        console.log({
            function_declaration,
            arguments_assert_call_expression
        });
        return;
    }
    console.log(callers);
}