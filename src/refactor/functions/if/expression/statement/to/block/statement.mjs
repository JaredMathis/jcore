import { refactor_if_expression_statement_to_block_statement } from '../../../../../../if/expression/statement/to/block/statement.mjs';
import { function_names_each_map_args } from '../../../../../../../function/names/each/map/args.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export async function refactor_functions_if_expression_statement_to_block_statement() {
    arguments_assert(arguments, []);
    await function_names_each_map_args(refactor_if_expression_statement_to_block_statement, {});
}