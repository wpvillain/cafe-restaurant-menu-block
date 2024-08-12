import { parse } from '@wordpress/block-serialization-default-parser';

const handleParseWordpress = rawHtml => {
	const convertedTag = parse(rawHtml.trim());
	console.log('Parsed Template:', convertedTag);
	return convertedTag;
  };

const rawHtml = `
<!-- wp:create-block/cafe-restaurant-menu-block -->
<!-- wp:cover {"url":"https://cafejpcoen.test/wp-content/plugins/cafe-restaurant-menu-block/src/images/2402_3200_matthieu-joannon-6cilddtotgm-unsplash.webp","dimRatio":0,"overlayColor":"black","isUserOverlayColor":true,"align":"full","className":"wpv-cover-image-block"} -->
<div class="wp-block-cover alignfull wpv-cover-image-block"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-0 has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="https://cafejpcoen.test/wp-content/plugins/cafe-restaurant-menu-block/src/images/2402_3200_matthieu-joannon-6cilddtotgm-unsplash.webp" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"align":"full","className":"wpv-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group alignfull wpv-group-block"><!-- wp:group {"className":"wpv-vertical-group-block","style":{"color":{"background":"#abd8bf"},"spacing":{"padding":{"top":"0.5rem","right":"0.5rem","bottom":"0.5rem","left":"0.5rem"}}},"layout":{"type":"flex","orientation":"vertical"}} -->
<div class="wp-block-group wpv-vertical-group-block has-background" style="background-color:#abd8bf;padding-top:0.5rem;padding-right:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem"><!-- wp:heading {"level":3,"className":"first-block-header","style":{"typography":{"fontFamily":"'Orbitron', sans-serif","fontWeight":"500","fontSize":"28px"},"color":{"text":"#014521"}}} -->
<h3 class="wp-block-heading first-block-header has-text-color" style="color:#014521;font-family:'Orbitron', sans-serif;font-size:28px;font-weight:500">Koffie &amp; Thee</h3>
<!-- /wp:heading -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Diverse Nespresso koffie vanaf</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#c39e64"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#c39e64;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">2.5.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Verse muntthee</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#c39e64"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#c39e64;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">3</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Germberthee</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#c39e64"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#c39e64;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">3</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Koffie met een tic</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#c39e64"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#c39e64;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">7</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:heading {"level":3,"className":"first-block-header","style":{"typography":{"fontFamily":"'Orbitron', sans-serif","fontWeight":"500","fontSize":"28px"},"color":{"text":"#014521"}}} -->
<h3 class="wp-block-heading first-block-header has-text-color" style="color:#014521;font-family:'Orbitron', sans-serif;font-size:28px;font-weight:500">Frisdranken</h3>
<!-- /wp:heading -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Diverse frisdranken vanaf </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#c39e64"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#c39e64;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">3</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-vertical-group-block","style":{"color":{"background":"#70ab8b"},"spacing":{"padding":{"top":"0.5rem","right":"0.5rem","bottom":"0.5rem","left":"0.5rem"}}},"layout":{"type":"flex","orientation":"vertical"}} -->
<div class="wp-block-group wpv-vertical-group-block has-background" style="background-color:#70ab8b;padding-top:0.5rem;padding-right:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem"><!-- wp:heading {"level":3,"className":"second-block-header","style":{"typography":{"fontFamily":"'Orbitron', sans-serif","fontWeight":"500","fontSize":"28px"},"color":{"text":"#ffffff"}}} -->
<h3 class="wp-block-heading second-block-header has-text-color" style="color:#ffffff;font-family:'Orbitron', sans-serif;font-size:28px;font-weight:500">Wijnen</h3>
<!-- /wp:heading -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Chordonnay</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Portugal</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#dcb171"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#dcb171;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">4.5</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500"> Verdego</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Spanje</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#dcb171"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#dcb171;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">4.5</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Pinot Grigio</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Italië</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#dcb171"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#dcb171;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">4.5</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Cava</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Spanje</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#dcb171"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#dcb171;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">4.5</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"wpv-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group alignfull wpv-group-block"><!-- wp:group {"className":"wpv-vertical-group-block","style":{"color":{"background":"#014521"},"spacing":{"padding":{"top":"0.5rem","right":"0.5rem","bottom":"0.5rem","left":"0.5rem"}}},"layout":{"type":"flex","orientation":"vertical"}} -->
<div class="wp-block-group wpv-vertical-group-block has-background" style="background-color:#014521;padding-top:0.5rem;padding-right:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem"><!-- wp:heading {"level":3,"className":"first-block-header","style":{"typography":{"fontFamily":"'Orbitron', sans-serif","fontWeight":"500","fontSize":"28px"},"color":{"text":"#ffffff"}}} -->
<h3 class="wp-block-heading first-block-header has-text-color" style="color:#ffffff;font-family:'Orbitron', sans-serif;font-size:28px;font-weight:500">Bieren uit de fles</h3>
<!-- /wp:heading -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Diverse Nespresso koffie vanaf</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">2.5.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Verse muntthee</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">3</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Germberthee</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">3</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Koffie met een tic</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#c39e64"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#c39e64;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">7</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-vertical-group-block","style":{"color":{"background":"#70ab8b"},"spacing":{"padding":{"top":"0.5rem","right":"0.5rem","bottom":"0.5rem","left":"0.5rem"}}},"layout":{"type":"flex","orientation":"vertical"}} -->
<div class="wp-block-group wpv-vertical-group-block has-background" style="background-color:#70ab8b;padding-top:0.5rem;padding-right:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem"><!-- wp:heading {"level":3,"className":"second-block-header","style":{"typography":{"fontFamily":"'Orbitron', sans-serif","fontWeight":"500","fontSize":"28px"},"color":{"text":"#ffffff"}}} -->
<h3 class="wp-block-heading second-block-header has-text-color" style="color:#ffffff;font-family:'Orbitron', sans-serif;font-size:28px;font-weight:500">Hapjes</h3>
<!-- /wp:heading -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Chordonnay</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Portugal</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#dcb171"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#dcb171;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">4.5</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500"> Verdego</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Spanje</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#dcb171"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#dcb171;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">4.5</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Pinot Grigio</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Italië</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#dcb171"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#dcb171;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">4.5</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"wpv-row-group-block","layout":{"type":"flex","orientation":"horizontal"}} -->
<div class="wp-block-group wpv-row-group-block"><!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Cava</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#ffffff"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#ffffff;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">Spanje</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"first-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#dcb171"}}} -->
<p class="first-group-paragraph has-text-color" style="color:#dcb171;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">|</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"second-group-paragraph","style":{"typography":{"fontFamily":"'Asap Condensed', sans-serif","fontWeight":"500","fontSize":"15px"},"color":{"text":"#014521"}}} -->
<p class="second-group-paragraph has-text-color" style="color:#014521;font-family:'Asap Condensed', sans-serif;font-size:15px;font-weight:500">4.5</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->
<!-- /wp:create-block/cafe-restaurant-menu-block -->
`;

export const MY_TEMPLATE = handleParseWordpress(rawHtml);
// console.log(MY_TEMPLATE); // Add this line to log the parsed template