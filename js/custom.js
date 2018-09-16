(function ($) {"use strict";function clientCarosule(){$("#clients .owl-carousel").length&&$("#clients .owl-carousel").owlCarousel({loop:!0,margin:40,nav:!0,dots:!1,autoWidth:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],autoplayHoverPause:!0,responsive:{0:{items:1},480:{items:2},600:{items:3},1e3:{items:5}}})}function galleryMasonaryLayout(){$(".masonary-gallery").length&&$(".masonary-gallery").isotope({layoutMode:"masonry"})}function gMap(){$(".google-map").length&&$(".google-map").each(function(){var e=$(this).attr("id"),t=$(this).data("map-lat"),a=$(this).data("map-lng"),n=$(this).data("icon-path"),i=$(this).data("map-zoom"),o=$(this).data("map-title");if(!i)var i=15;var r;r=new GMaps({div:"#"+e,scrollwheel:!1,lat:t,lng:a,zoom:i}),n&&r.addMarker({icon:n,lat:t,lng:a,title:o})})}function HomeTworevolutionSliderActiver(){$(".home-v2.banner").length&&$(".home-v2.banner").revolution({delay:1e4,startwidth:1170,startheight:802,startWithSlide:0,fullScreenAlignForce:"off",autoHeight:"off",minHeight:"off",shuffle:"off",onHoverStop:"off",thumbWidth:100,thumbHeight:50,thumbAmount:3,hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResoluition:0,hideThumbs:0,hideTimerBar:"on",keyboardNavigation:"on",navigationType:"none",navigationArrows:"nexttobullets",navigationStyle:"preview4",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:30,navigationVOffset:30,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,touchenabled:"on",swipe_velocity:"0.7",swipe_max_touches:"1",swipe_min_touches:"1",drag_block_vertical:"false",parallax:"mouse",parallaxBgFreeze:"on",parallaxLevels:[10,7,4,3,2,5,4,3,2,1],parallaxDisableOnMobile:"off",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,hideSliderAtLimit:0,dottedOverlay:"none",spinned:"spinner4",fullWidth:"on",forceFullWidth:"on",fullScreen:"off",fullScreenOffsetContainer:"#banner",fullScreenOffset:"0px",panZoomDisableOnMobile:"off",simplifyAll:"off",shadow:0})}function galleryHover(){$(".masonary-gallery").length&&$(".masonary-gallery .content-wrap").each(function(){}),$(".normal-gallery").length&&$(".normal-gallery .content-wrap").each(function(){$(this).addClass("hvr-rectangle-out"),$(this).parent().parent().addClass("mix")})}function customTabServiceTab(){if($("#service-we-provide .service-tab-title").length){var e=$("#service-we-provide .col-lg-9 .service-tab-content"),t=$("#service-we-provide .service-tab-title ul li");e.children("div").hide(),e.children("div").eq(0).show(),t.on("click",function(){var a=$(this).data("tab-name");t.removeClass("active"),$(this).addClass("active");var n="#"+a;return e.children("div").not(n).hide(),e.children("div"+n).fadeIn("500"),!1})}}function GalleryFilter(){$("#image-gallery-mix").length&&($(".gallery-filter").find("li").each(function(){$(this).addClass("filter")}),$("#image-gallery-mix").mixItUp()),$(".gallery-filter.masonary").length&&$(".gallery-filter.masonary span").on("click",function(){var e=$(this).parent().attr("data-filter");return $(".gallery-filter.masonary span").parent().removeClass("active"),$(this).parent().addClass("active"),$("#image-gallery-isotope").isotope({filter:e}),!1})}function mobileNavToggler(){$("header .mainmenu-container").length&&($("header button.mainmenu-toggler").on("click",function(){return $("ul.mainmenu").slideToggle(),!1}),$(".mainmenu-container ul li.dropdown").append(function(){return'<i class="fa fa-bars"></i>'}),$(".mainmenu-container ul li.dropdown .fa").on("click",function(){$(this).parent("li").children("ul").slideToggle()}))}function wowActivator(){var e=new WOW({offset:0});e.init()}function GalleryFancyboxActivator(){var e=$(".fancybox");e.length&&e.fancybox()}function contactFormValidation(){$(".contact-form").length&&$(".contact-form").validate({rules:{name:{required:!0},email:{required:!0,email:!0},message:{required:!0},subject:{required:!0}},submitHandler:function(e){return $.post($(e).attr("action"),$(e).serialize(),function(t){$(e).parent("div").append(t),$(e).find('input[type="text"]').val(""),$(e).find('input[type="email"]').val(""),$(e).find("textarea").val("")}),!1}})}function rqaFormValidation(){$(".rqa-form").length&&$(".rqa-form").each(function(){var e=$(this);e.validate({rules:{name:{required:!0},email:{required:!0,email:!0},phone:{required:!0,number:!0},city:{required:!0}},submitHandler:function(e){return $.post($(e).attr("action"),$(e).serialize(),function(t){$(e).parent("div").append(t),$(e).find('input[type="text"]').val(""),$(e).find('input[type="email"]').val(""),$(e).find("textarea").val("")}),!1}})})}function handlePreloader(){$(".preloader").length&&$(".preloader").fadeOut()}function headerTopSearch(){$("header .mainmenu-container ul li.top-icons.search a").length&&$("header .mainmenu-container ul li.top-icons.search a").on("click",function(){return $("header .search-box").slideToggle(),$("header .cart-box").slideUp(),!1})}function headerTopCart(){$("header .mainmenu-container ul li.top-icons.cart a").length&&$("header .mainmenu-container ul li.top-icons.cart a").on("click",function(){return $("header .search-box").slideUp(),$("header .cart-box").slideToggle(),!1})}function BannerTabActivation(){var e=$(".banner-form .tab-title"),t=$(".banner-form .tab-content");e.length&&(t.find("div").hide(),t.find("div").eq(0).show(),e.children("div").on("click",function(){e.children("div").removeClass("active"),$(this).addClass("active");var a=$(this).data("title");t.find("div").hide(),t.find("#"+a).fadeIn()}))}function RequestQoutTabActivation(){var e=$("#request-a-qoute-container .tab-title ul li"),t=$("#request-a-qoute-container .tab-content");e.length&&(t.find("div").hide(),t.find("div").eq(0).show(),e.children("span").on("click",function(){e.children("span").removeClass("active"),$(this).addClass("active");var a=$(this).parent().data("tab-title");t.find("div").hide(),t.find("#"+a).fadeIn()}))}function stickyHeader(){var e=$("header").next().offset().top;$(window).scrollTop()>e?$("header").addClass("header-fixed"):$(this).scrollTop()<=e&&$("header").removeClass("header-fixed")}function footerMenuToggler(){var e=$("button.footer-nav-toggler"),t=$(".footer-menu ul");t.length&&e.on("click",function(){t.slideToggle()})}function CounterNumberChanger(){var e=$(".timer");e.length&&e.appear(function(){e.countTo()})}function ParallaxActivation(){var e=$(".parallax");e.length&&e.each(function(){$(this).scrolly({bgParallax:!0})})}function SmoothMenuScroll(){var e=$(".scrollToLink");e.length&&e.children("a").bind("click",function(t){if($(window).scrollTop()>10)var a="45";else var a="125";var n=$(this);$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top-a+"px"},1200,"easeInOutExpo"),e.removeClass("current"),n.parent().addClass("current"),t.preventDefault()})}function OnePageMenuScroll(){var e=$(window).scrollTop();e>=100?$(".mainmenu.one-page-scroll-menu .scrollToLink").find("a").each(function(){var t=$(this).attr("href");$(t).each(function(){if($(this).offset().top<=e+100){var a=$(t).attr("id");$(".mainmenu").find("li").removeClass("current"),$(".mainmenu").find("a[href=#"+a+"]").parent().addClass("current")}})}):($(".mainmenu.one-page-scroll-menu li.current").removeClass("current"),$(".mainmenu.one-page-scroll-menu li:first").addClass("current"))}function customTabProductPageTab(){if($(".product-details-tab-title").length){var e=$(".product-details-tab-content"),t=$(".product-details-tab-title ul li");e.children("div").hide(),e.children("div").eq(0).show(),t.on("click",function(){var a=$(this).data("tab-name");t.removeClass("active"),$(this).addClass("active");var n="#"+a;return e.children("div").not(n).hide(),e.children("div"+n).fadeIn("500"),!1})}}
    function ifameFit(ww,wh){$('#video').find('iframe').attr('width',ww).attr('height',wh);}
	// Dom Ready Function
	$(document).on('ready', function () {
        var wh = $(window).height();
        var ww = $(window).width();
        var dh = $(document).height();
        var $footer = $('footer');
        $('#fullpage').fullpage({
            scrollBar:true
        });
        $('#video').click(function(){
            $(this).children('div').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/I8qfYweuiro?autoplay=1" frameborder="0"></iframe>');
            ifameFit(ww,wh);
            $('#video-init-btn').hide();
        });
        $footer.children('div').children('.container').css({'margin-top' : wh - $footer.children('div').children('.container').height()-$('#bottom-bar').height()});
		// add your functions
		clientCarosule();
		galleryMasonaryLayout();
		gMap();
		galleryHover();
		GalleryFilter();
		mobileNavToggler();
		customTabServiceTab();
		wowActivator();
		contactFormValidation();
		rqaFormValidation();
		headerTopSearch();
		headerTopCart();
		BannerTabActivation();
		RequestQoutTabActivation();
		GalleryFancyboxActivator();
		footerMenuToggler();
		HomeTworevolutionSliderActiver();
		ParallaxActivation();
		SmoothMenuScroll();		
		customTabProductPageTab();
        $('.fit-height').css('height',$(window).height());
        $('#order-preview-form').delay(2500).css('top',$(window).height()-$('#order-preview-form').height()-55);
    });
	// window on scroll functino
	$(window).on('scroll', function () {
		// add your functions
		stickyHeader();
		OnePageMenuScroll();
	});
	// window on load function
	$(window).on('load', function () {
		// add your functions
		CounterNumberChanger();
		handlePreloader();
	});
    //плавно к якорю
    $('a').click(function(){
        var anch = $(this).data('to');
        //var correction = ($('header').hasClass('header-fixed'))? 0: 50;
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href')).offset().top //- correction
        }, 1000, function(){
            $('.section').removeClass('active');
            $('#'+anch).addClass('active');
        });
        return false;
    });
    //управление табами из главного меню
    $('a.tabs-to').click(function(){
        var anch = $(this).data('to');
        $('.this-tabs').removeClass('active');
        $('#'+anch).addClass('active');
    });
    //

})(jQuery);