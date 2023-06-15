import { function_input_add } from '../../add.mjs';
export async function function_input_add_multiple_generic(inputs, function_name) {
    for (let i of inputs) {
        await function_input_add(function_name, i);
    }
}