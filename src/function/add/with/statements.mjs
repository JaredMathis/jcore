import { metadata } from '../../../metadata.mjs';
import { function_add_with_statements_synchronized } from './statements/synchronized.mjs';
export async function function_add_with_statements(function_name, statements) {
    let is_async = false;
    return await function_add_with_statements_synchronized(function_name, statements, is_async);
    metadata([]);
}