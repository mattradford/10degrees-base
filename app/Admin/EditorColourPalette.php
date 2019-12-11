<?php

namespace App\Admin;

/**
 * Add custom CSS properties to block editor colour palette
 *
 * @category Theme
 * @package  TenDegrees/10degrees-base
 * @author   10 Degrees <wordpress@10degrees.uk>
 * @license  https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html GPL-2.0+
 * @link     https://github.com/10degrees/10degrees-base
 * @since    2.0.0
 */
class EditorColourPalette
{
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->addEditorColourPalette();
    }

    /**
     * Set the colour palette according to colours defined in SCSS
     *
     * @see src/scss/common/_variables.scss
     *
     * @return void
     */
    public function addEditorColourPalette()
    {
        add_theme_support(
            'editor-color-palette',
            [
                [
                    'name'  => __('Primary', '@textdomain'),
                    'slug'  => 'primary',
                    'color' => 'var(--primary-colour)',
                ],
                [
                    'name'  => __('Secondary', '@textdomain'),
                    'slug'  => 'secondary',
                    'color' => 'var(--secondary-colour)',
                ],
                [
                    'name'  => __('Tertiary', '@textdomain'),
                    'slug'  => 'Tertiary',
                    'color' => 'var(--tertiary-colour)',
                ],
                [
                    'name'  => __('White', '@textdomain'),
                    'slug'  => 'white',
                    'color' => 'white',
                ],
                [
                    'name'  => __('Dark Grey', '@textdomain'),
                    'slug'  => 'grey-9',
                    'color' => 'var(--text-colour)',
                ],
            ]
        );
    }
}
