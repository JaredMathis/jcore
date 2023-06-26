import { function_name_separator } from '../../../function/name/separator.mjs';
import { version_property_commit } from '../../property/commit.mjs';
export function version_document_path_commit(commit_id) {
    return `${ version_property_commit() }${ function_name_separator() }${ commit_id }`;
    metadata([]);
}