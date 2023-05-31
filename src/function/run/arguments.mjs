import { metadata } from '../../metadata.mjs';
import { list_first } from '../../list/first.mjs';
import { list_skip_first } from '../../list/skip/first.mjs';
import { list_to } from '../../list/to.mjs';
import { function_run } from '../run.mjs';
export async function function_run_arguments(input) {
    let args = list_to(input);
    let function_name = list_first(args);
    let remaining = list_skip_first(args);
    let result = await function_run(function_name, remaining);
    return result;
    metadata([]);
}