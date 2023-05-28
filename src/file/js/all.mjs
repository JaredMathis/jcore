import { directory_read } from "../../directory/read.mjs";
import { array_filter } from "../../array/filter.mjs";
import { array_map } from "../../array/map.mjs";
import { array_first } from "../../array/first.mjs";
import { string_ends_with } from "../../string/ends/with.mjs";
import { string_split } from "../../string/split.mjs";
import { array_join } from "../../array/join.mjs";
import { directory_separator } from "../../directory/separator.mjs";
import { function_name_separator } from "../../function/name/separator.mjs";
import { assert } from "../../assert.mjs";
import { array_skip } from "../../array/skip.mjs";
import { function_extension } from "../../function/extension.mjs";
import { string_without_suffix } from "../../string/without/suffix.mjs";
import { array_skip_first } from "../../array/skip/first.mjs";

export async function file_js_all() {
    let ds = directory_separator();
    let directory_source = 'src';
    let result = await directory_read('./' + directory_source);
    let filtered = array_filter(
        result,
        a => string_ends_with(a, function_extension()));
    let mapped = array_map(filtered, a => string_split(a, ds));
    let mapped2 = array_map(mapped, a => {
        assert(array_first(a) === directory_source);
        return array_skip_first(a);
    });
    let fns = function_name_separator();
    let mapped3 = array_map(
        mapped2,
        a => array_join(a, fns));
    let mapped4 = array_map(
        mapped3,
        a => string_without_suffix(a, function_extension())
    );
    return mapped4;
}
