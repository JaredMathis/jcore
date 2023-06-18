import { list_last_index } from '../../../list/last/index.mjs';
import { function_inputs } from '../../inputs.mjs';
export async function function_input_last_index(function_name) {
    let inputs = await function_inputs(function_name);
    const input_index = list_last_index(inputs);
    return input_index;
}