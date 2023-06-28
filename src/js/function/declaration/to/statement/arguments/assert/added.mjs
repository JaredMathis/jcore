import { metadata } from '../../../../../../../metadata.mjs';
export async function js_function_declaration_to_statement_arguments_assert_added(function_declaration) {
    let {statement, added} = await newFunction(function_declaration);
    return {
        statement,
        added
    };
    metadata([]);
}