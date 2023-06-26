import { metadata } from '../../../metadata.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { version_property_commit } from '../../property/commit.mjs';
export function version_document_path_commit(commit_id) {
    let v = version_property_commit();
    let v_2 = function_name_separator();
    return `${ v }${ v_2 }${ commit_id }`;
    metadata([]);
}