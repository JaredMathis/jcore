import { array_add } from "../../../../../array/add.mjs";
import { array_any } from "../../../../../array/any.mjs";
import { array_first } from "../../../../../array/first.mjs";
import { array_length_is_1 } from "../../../../../array/length/is/1.mjs";
import { array_map } from "../../../../../array/map.mjs";
import { directory_current } from "../../../../../directory/current.mjs";
import { object_property_get } from "../../../../../object/property/get.mjs";
import { string_starts_with } from "../../../../../string/starts/with.mjs";
import { js_directory_separator } from "../../../../directory/separator.mjs";
import { js_node_is_identifier } from "../../../../node/is/identifier.mjs";
import { js_node_is_import_specifier } from "../../../../node/is/import/specifier.mjs";
import { js_node_is_literal } from "../../../../node/is/literal.mjs";
import { js_import_all } from "../../../all.mjs";
import { js_import_all_with_function_names } from "../../with/function/names.mjs";

export function js_import_all_to_function_name(parsed) {
    let with_function_names = js_import_all_with_function_names(parsed);
    let result = array_map(
        with_function_names, w => object_property_get(w, 'name'));
    return result;
}


