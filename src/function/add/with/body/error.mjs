import { error } from '../../../../error.mjs';
import { function_add_with_body } from '../body.mjs';
export async function function_add_with_body_error(function_name) {
    let error_statement = `${ error.name }('todo: ${ function_name }');`;
    return await function_add_with_body(function_name, []);
}