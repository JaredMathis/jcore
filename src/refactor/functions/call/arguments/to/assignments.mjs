import { js_node_property_argument_get } from '../../../../../js/node/property/argument/get.mjs';
import { js_node_is_await_expression } from '../../../../../js/node/is/await/expression.mjs';
import { not } from '../../../../../not.mjs';
import { js_node_property_right_get } from '../../../../../js/node/property/right/get.mjs';
import { js_node_is_assignment_expression } from '../../../../../js/node/is/assignment/expression.mjs';
import { list_adder_unique_async } from '../../../../../list/adder/unique/async.mjs';
import { list_find_first_index_after } from '../../../../../list/find/first/index/after.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_node_is_variable_declaration } from '../../../../../js/node/is/variable/declaration.mjs';
import { json_to } from '../../../../../json/to.mjs';
import { list_map_try } from '../../../../../list/map/try.mjs';
import { js_node_property_type_get } from '../../../../../js/node/property/type/get.mjs';
import { object_copy_shallow } from '../../../../../object/copy/shallow.mjs';
import { js_variable_declarator_init_change } from '../../../../../js/variable/declarator/init/change.mjs';
import { js_node_property_declarations_get } from '../../../../../js/node/property/declarations/get.mjs';
import { js_code_statement_assignment } from '../../../../../js/code/statement/assignment.mjs';
import { js_identifier_name_next } from '../../../../../js/identifier/name/next.mjs';
import { list_reversed_get } from '../../../../../list/reversed/get.mjs';
import { js_node_property_arguments_get } from '../../../../../js/node/property/arguments/get.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
import { js_node_property_expression_get } from '../../../../../js/node/property/expression/get.mjs';
import { js_node_is_expression_statement } from '../../../../../js/node/is/expression/statement.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { list_get } from '../../../../../list/get.mjs';
import { js_node_is_block_statement } from '../../../../../js/node/is/block/statement.mjs';
import { add_1 } from '../../../../../add/1.mjs';
import { js_node_is_program } from '../../../../../js/node/is/program.mjs';
import { string_a } from '../../../../../string/a.mjs';
import { js_parse_statement } from '../../../../../js/parse/statement.mjs';
import { list_single } from '../../../../../list/single.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { assert_message } from '../../../../../assert/message.mjs';
import { js_parse_expression } from '../../../../../js/parse/expression.mjs';
import { list_add_before } from '../../../../../list/add/before.mjs';
export async function refactor_functions_call_arguments_to_assignments() {
    arguments_assert(arguments, []);
    return await list_adder_unique_async(async la => {
        await file_js_all_map_args_if_function(async function logic(args) {
            
        });
    });
    metadata([]);
}