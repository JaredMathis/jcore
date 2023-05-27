import { directory_read } from "../../directory/read.mjs";
import { array_filter } from "../../array/filter.mjs";
import { array_map } from "../../array/map.mjs";
import { array_first } from "../../array/first.mjs";
import { string_ends_with } from "../../string/ends/with.mjs";
import { string_split } from "../../string/split.mjs";
import { array_join } from "../../array/join.mjs";
import { directory_separator } from "../../directory/separator.mjs";
import { function_name_separator } from "../name/separator.mjs";
import { string_includes } from "../../string/includes.mjs";
import { assert } from "../../assert.mjs";
import { array_skip } from "../../array/skip.mjs";

export async function function_name_all() {
    let ds = directory_separator();
    let directory_source = 'src';
    let result = await directory_read('./' + directory_source);
    let filtered = array_filter(
        result, 
        a => string_ends_with(a, '.mjs') && !string_includes(a, `${ds}test${ds}`));
    let mapped = array_map(filtered, a => string_split(a, ds));
    let mapped2 = array_map(mapped, a => {
        assert(array_first(a) === directory_source);
        return array_skip(a, 1);
    });
    let joined = array_join(mapped2, function_name_separator());
    return joined;
}