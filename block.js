/* global wp */
const { registerBlockType } = wp.blocks;
const blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };

registerBlockType('my-gutenberg-ext/hello-world', {
    title: 'Hello World',
    icon: 'universal-access-alt',
    category: 'layout',
    edit: () => <p style={blockStyle}>Hello editor.</p>,
    save: () => <p style={blockStyle}>Hello saved content.</p>,
});
