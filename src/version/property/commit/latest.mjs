import { function_name_separator } from '../../../function/name/separator.mjs';
import { version_property_commit } from '../commit.mjs';
export function version_property_commit_latest() {
    return `${ version_property_commit() }${ function_name_separator() }latest`;
    metadata([]);
}