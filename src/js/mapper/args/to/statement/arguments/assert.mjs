import { js_mapper_args_to_statement_arguments_assert_added } from './assert/added.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { js_mapper_args_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export async function js_mapper_args_to_statement_arguments_assert(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let result = await js_mapper_args_to_statement_arguments_assert_added(args);
    let {statement} = result;
    return statement;
    metadata([]);
}