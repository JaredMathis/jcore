import { metadata } from '../../../../metadata.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { refactor_metadata_add_function } from '../../add/function.mjs';
export async function refactor_metadata_generated_add_function(args) {
    await refactor_metadata_add_function(args, metadata_generated);
    metadata([]);
}