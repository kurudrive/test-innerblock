import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
 
registerBlockType( 'create-block/test-innerblock', {
    // ...
 
    edit: () => {
        const blockProps = useBlockProps();
 
        return (
            <div { ...blockProps }>
                <InnerBlocks />
            </div>
        );
    },
 
    save: () => {
        const blockProps = useBlockProps.save();
 
        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );