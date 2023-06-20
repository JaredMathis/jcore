import { refactor_if_expression_statement_to_block_statement } from '../../../../../../if/expression/statement/to/block/statement.mjs';
import { file_js_all_map_args_if_function_args } from '../../../../../../../file/js/all/map/args/if/function/args.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export async function refactor_functions_if_expression_statement_to_block_statement() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function_args(refactor_if_expression_statement_to_block_statement, {});
}