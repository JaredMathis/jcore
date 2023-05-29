import { array_first } from '../../array/first.mjs';
import { array_skip_first } from '../../array/skip/first.mjs';
import { array_to } from '../../array/to.mjs';
import { function_run } from '../run.mjs';
export async function function_run_arguments(input) {
    let args = array_to(input);
    let function_name = array_first(args);
    let remaining = array_skip_first(args);
    let result = await function_run(function_name, remaining);
    return result;
}