<?php
// Enqueue parent and child theme styles
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'), null );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

// Enqueue custom JavaScript and CSS for the Puppy Bowl project
function enqueue_puppy_bowl_scripts() {
    wp_enqueue_style( 'puppy-bowl-style', get_stylesheet_directory_uri() . '/puppy-bowl/style.css' );
    wp_enqueue_script( 'puppy-bowl-script', get_stylesheet_directory_uri() . '/puppy-bowl/index.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_puppy_bowl_scripts' );

// Create a shortcode that outputs the React project HTML structure
function puppy_bowl_shortcode() {
    ob_start();
    ?>
    <header>
        <h1>Puppy Bowl 2024</h1>
        <nav>
            <ul>
                <li><a href="#allPlayers">All Players</a></li>
            </ul>
        </nav>
    </header>
    <div id="puppyDiv"></div>
    <div id="singlePuppDiv"></div>
    <?php
    return ob_get_clean();
}
add_shortcode( 'puppy_bowl', 'puppy_bowl_shortcode' );

// Simple test shortcode for debugging
function test_shortcode() {
    return 'Shortcode is working!';
}
add_shortcode( 'test', 'test_shortcode' );
?>

