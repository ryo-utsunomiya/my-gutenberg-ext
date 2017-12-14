<?php

function ssr_clock()
{
    ?>
    <div>Now: <?= date('Y-M-D H:i:s') ?></div>
    <?php
}

register_block_type('my-gutenberg-ext/ssr-clock', array(
    'render_callback' => 'ssr_clock',
));
