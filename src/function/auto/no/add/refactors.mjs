import { refactor_if_expression_statement_to_block_statement } from '../../../../refactor/if/expression/statement/to/block/statement.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../../../../js/mapper/args/to/statement/arguments/assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { refactor_functions_to_files } from '../../../../refactor/functions/to/files.mjs';
export function function_auto_no_add_refactors() {
    arguments_assert(arguments, []);
    let v = [
        js_mapper_args_to_statement_arguments_assert,
        refactor_if_expression_statement_to_block_statement,
        refactor_functions_to_files
    ];
    return v;
    metadata([]);
}