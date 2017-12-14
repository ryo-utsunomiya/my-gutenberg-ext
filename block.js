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

const staticNow = new Date().toISOString();

registerBlockType('my-gutenberg-ext/static-clock', {
    title: 'Static CLock',
    icon: 'universal-access-alt',
    category: 'layout',
    edit: () => <div>Now: {staticNow}</div>,
    save: () => <div>Now: {staticNow}</div>,
});

registerBlockType('my-gutenberg-ext/ssr-clock', {
    title: 'SSR Clock',
    icon: 'universal-access-alt',
    category: 'layout',
    edit: () => <div>Now: #SSR#</div>,
    save: () => null,
});

registerBlockType('my-gutenberg-ext/csr-clock', {
    title: 'CSR Clock',
    icon: 'universal-access-alt',
    category: 'layout',
    edit: () => <div>Now: #CSR#</div>,
    save: () => <div>Now: <span className="clock">#CSR#</span></div>,
});
