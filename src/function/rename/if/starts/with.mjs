import { string_starts_with } from "../../../../string/starts/with.mjs";
import { function_name_all } from "../../../name/all.mjs";

export function function_rename_if_starts_with(prefix_old, prefix_new) {
    let names = await function_name_all();
    for (let n of names) {
        if (string_starts_with(n, prefix_old)) {
            let n_new = string_prefix_replace(n, prefix_old, prefix_new);
        }
    }
}