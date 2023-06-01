
import { metadata } from './metadata.mjs';
import { metadata_generated } from './metadata/generated.mjs';
import { visit_recursive } from './visit/recursive.mjs';
export function visit(root, children_get, lambda_local) {
    visit_recursive(root, children_get, lambda_local, []);
    metadata([metadata_generated()]);
}