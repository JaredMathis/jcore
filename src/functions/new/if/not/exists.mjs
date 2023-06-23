import { function_exists } from '../../../../function/exists.mjs';
export async function functions_new_if_not_exists(lambda_function_new_get, identifiers, lambda_function_new) {
    let needed = lambda_function_new_get(identifiers);
    for (let n of needed) {
        if (!await function_exists(n)) {
            await lambda_function_new(n);
        }
    }
}