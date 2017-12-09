<?php
/*
Plugin Name: my-gutenberg-ext
Plugin URI: https://github.com/ryo-utsunomiya/my-gutenberg-ext
Description: Sample implementation of Gutenberg customize.
Version: 0.1
Author: Ryo Utsunomiya
Author URI: https://ryo511.info
License: GPLv2
*/

function my_gutenberg_ext_enqueue_block_editor_assets()
{
    wp_enqueue_script(
        'my-gutenberg-ext',
        plugins_url('block.build.js', __FILE__),
        array('wp-blocks', 'wp-element')
    );
}

add_action('enqueue_block_editor_assets', 'my_gutenberg_ext_enqueue_block_editor_assets');
