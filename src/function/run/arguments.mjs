import { array_first } from "../../array/first.mjs";
import { array_skip_first } from "../../array/skip/first.mjs";
import { function_run } from "../run.mjs";

export async function function_run_arguments(skipped) {
    let function_name = array_first(skipped);
    let remaining = array_skip_first(skipped);

    let result = await function_run(function_name, remaining);
    return result;
}