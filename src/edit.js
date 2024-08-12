/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Import files for loading meta data and for importing block template data
 */
// import {registerBlockType} from '@wordpress/blocks';
import { MY_TEMPLATE } from './template';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const ALLOWED_BLOCKS = [
		'core/image',
		'core/paragraph',
		'core/columns',
		'core/cover',
		'core/group',
		'core/heading',
	];

	/**
	 * The useBlockProps hook provides properties that are necessary for the block's
	 *  wrapper element, such as class names and other editor-specific attributes.
	 * @llink https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-wrapper/
	 */
	const blockProps = useBlockProps();
	const { menuHeadline, menuItemTitle, menuItemPrice } = attributes;

	return (
		<div { ...blockProps }>
			<InnerBlocks
				template={ MY_TEMPLATE }
				allowedBlocks={ ALLOWED_BLOCKS }
				templateLock={ false }
			/>
		</div>
	);
}
