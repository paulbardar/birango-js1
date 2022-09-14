// jQuery


// mobile menu
function mobileMenu() {
    const openBtn = document.querySelector('.open-menu');

    openBtn.addEventListener('click', function(event) {
        event.preventDefault();
        openBtn.classList.toggle('open-btn');
        if ( document.body.classList.contains('menu-opened') ) {
            document.body.classList.remove('menu-opened');
        } else {
            document.body.classList.add('menu-opened');
        }
    });
};


// Btn class mouse hover out
function buttonEnterAnimation() {
    let btnCircle = document.querySelectorAll('.btn-circle');
    for (let i = 0; i < btnCircle.length; i++) {

        btnCircle[i].addEventListener( 'mouseenter', function() {
            setTimeout(function () {
                btnCircle[i].classList.add('btn-circle-anim-first');
            }, 300);
            if(  btnCircle[i].classList.contains("btn-circle-anim-back") ) {
                setTimeout(function () {
                    btnCircle[i].classList.remove("btn-circle-anim-back");
                }, 300);

            }
        });
    }
}
function buttonLeaveAnimation() {
    let btnCircle = document.querySelectorAll('.btn-circle');
    for (let i = 0; i < btnCircle.length; i++) {
        btnCircle[i].addEventListener( 'mouseleave', function() {
            setTimeout(function () {
                btnCircle[i].classList.add('btn-circle-anim-back');
            },300);
            if( btnCircle[i].classList.contains("btn-circle-anim-first") ) {
                setTimeout(function () {
                    btnCircle[i].classList.remove("btn-circle-anim-first");
                }, 300);
                // btnCircle[i].classList.remove("btn-circle-anim-first");
            }
        });
    }
}

function titleAnimation() {
    let heroTitleLines = document.querySelectorAll( '.h1-title-line' );
    for( let i = 0; i < heroTitleLines.length; i++ ){
        if( (i % 2 === 0) ) {
            heroTitleLines[i].classList.add('title-fly-right');
        } else {
            heroTitleLines[i].classList.add('title-fly-left');
        }

    }
}

// Animation hero
let heroActual = document.createElement('div');
heroActual.setAttribute('id', 'hero_actual');
let heroSection = document.querySelector( '.hero' );
// document.heroSection.appendChild(heroActual);
document.getElementById("hero-block").appendChild(heroActual);

var $heroActual = document.querySelector('#hero_actual');
$heroActual.style.position = "absolute";

var position = {};
var size = {};

var imgGifSmall = document.getElementById('imgGiff1');
var openHero = function() {
    // imgGifSmall = event.currentTarget;
    position = imgGifSmall.getBoundingClientRect();
    size = {
        width: window.getComputedStyle(imgGifSmall).width,
        height: window.getComputedStyle(imgGifSmall).height
    }

    $heroActual.style.position = "absolute";
    $heroActual.style.top = position.top + 'px';
    $heroActual.style.left = position.left + 'px';
    $heroActual.style.height = size.height;
    $heroActual.style.width = size.width;

    // setTimeout(function(){
        $heroActual.innerHTML = imgGifSmall.innerHTML;
        var classes = imgGifSmall.classList.value.split(' ');
        for (var i = 0; i < classes.length; i++) {
            $heroActual.classList.add(classes[i]);
        }
        $heroActual.classList.add('growing');
        $heroActual.classList.add('imagegifshow');
        $heroActual.style.height = '100vh';
        $heroActual.style.width = '100vw';
        $heroActual.style.top = '0';
        $heroActual.style.left = '0';
        $heroActual.style.margin = '0';
    // }, 10);

    setTimeout(function(){
        $heroActual.classList.remove('growing');
        $heroActual.classList.add('full-screen')
    }, 1);
}
// var closeHero = function (){
function closeHero(){
    // $heroActual = event.currentTarget;

    $heroActual.style.height = size.height;
    $heroActual.style.width = size.width;
    $heroActual.style.top = position.top + 'px';
    $heroActual.style.left = position.left + 'px';
    $heroActual.style.margin = '0';
    $heroActual.classList.remove('imagegifshow');
    $heroActual.classList.remove('full-screen');
    $heroActual.classList.add('shrinking');

    setTimeout(function(){
        while($heroActual.firstChild) $heroActual.removeChild($heroActual.firstChild);
        var classList = $heroActual.classList;
        while (classList.length > 0) {
            classList.remove(classList.item(0));
        }
        $heroActual.style = '';
    }, 2000);
}

console.log(size);
setTimeout(openHero, 10);
setTimeout(closeHero, 2200);

// imgGifSmall.addEventListener('click', openHero);
// $heroActual.addEventListener("click", closeHero);
// setTimeout(closeHero, 2000);


// Image giphy animation
setTimeout(function() {
    $(".header").addClass('header-visual');
}, 2000);
setTimeout(function() {
    $(".img-giff").addClass('imagegifshow');
}, 1000);
// setTimeout(function() {
//     $(".img-giff").addClass('imagegifshowback');
// }, 1750);
// setTimeout(function() {
//     $(".img-giff").addClass('imagesmall');
// }, 2500);

// Second word wrap span
function secondWordWrap() {
    let secoddItalicPrases = document.querySelectorAll('.second-italic');
    for ( let secoddItalicPrase of secoddItalicPrases ) {
        let words = secoddItalicPrase.innerHTML.split(' ');
        words[1] = `<span>${words[1]}</span>`;
        secoddItalicPrase.innerHTML = words.join( ' ' );
    }

    // secodItalic.each(function(i) {
    //     let $thisText = $(this);
    //     let words = $thisText.innerHTML.split(' ');
    //     words[1] = `<span>${words[1]}</span>`;
    //     $thisText.innerHTML = words.join( ' ' );
    // });
}

// Second italic green bg
function secondGreenBgItalic() {
    let secondGreenBgItalic = document.querySelectorAll( '.second-italic-green' );
    for ( let secondItalicGreenPrase of secondGreenBgItalic ) {
        let words = secondItalicGreenPrase.innerHTML.split( ' ' );
        words[1] = `<span class="rounded-pill">${words[1]}</span>`;
        secondItalicGreenPrase.innerHTML = words.join( ' ' );
    }
}

(function($){
    'use strict';

    // Slider testimonials
    let initializeSlider = function($sliderBlock) {

        let sliderTestimonials = $('.clients-slider');
        if( sliderTestimonials.length ) {
            $sliderBlock.find( '.clients-slider' ).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                slide: '.mention-item',
                prevArrow: '.mentions-prev',
                nextArrow: '.mentions-next',
            });
        }
        sliderTestimonials.on('beforeChange', function(event, { slideCount: count }, currentSlide, nextSlide) {
            let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
            $('.slick-now').removeClass('slick-now');
            $('.video-element').removeClass('video-now');
            // let video = $(selectors).find('.video-element');
            $('.video-element').each(function() {
                $(this).get(0).pause();
            });
            $(selectors).addClass('slick-now');
            $('.video-element').addClass('video-now');

        });

        $('[data-slick-index="0"]').addClass('slick-now');
        $('[data-slick-index="0"]').find('.video-element').addClass('video-now');

    }

    // Slick video controlls
    // Posts Slider
    let initializePostsslider = function($postsSlider) {
        let sliderPosts = $('.posts-slider');
        if( sliderPosts.length ) {
            $postsSlider.find( '.posts-slider' ).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                slide: '.post-item',
                // arrows: false,
                // infinite: false,
                prevArrow: '.posts-prev',
                nextArrow: '.posts-next',
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            centerMode: true,
                            centerPadding: '60px',
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        function setSlideVisibility() {
            //Find the visible slides i.e. where aria-hidden="false"
            var visibleSlides = sliderPosts.find('.post-item[aria-hidden="true"]');
            //Make sure all of the visible slides have an opacity of 1
            $(visibleSlides).each(function() {
                $(this).css('opacity', 1);
            });

            //Set the opacity of the first and last partial slides.
            $(visibleSlides).first().prev().css('opacity', 0);
        }

        sliderPosts.slick('slickGoTo', 1);
        setSlideVisibility();

        sliderPosts.on('afterChange', function() {
            setSlideVisibility();
        });
    }





    // if( $mention_item.hasClass('slick-active') ) {
    //     $video.addClass('video-active');
    // } else {
    //     if($video.hasClass('video-active')) {
    //         $video.removeClass('video-active');
    //     }
    // }
    $('.mention-item--video').each(function(){
       let $video_container = $(this);
       let $video = $(this).find('.video-element');

       //Video Controls
        let $video_controls = $(this).find('.custom-video-controls');
        let $play_button = $(this).find('.custom-play-btn');
        let $current = $(this).find('.current');
        let $full_screen_video = $(this).find('.btn-fullscreen');
        var $video_head = $(this).find(".mention-item--description");

        function time_format(seconds) {
            let m = Math.floor(seconds / 60) < 10
                ? "0" + Math.floor(seconds / 60)
                : Math.floor(seconds / 60);
            let s = Math.floor(seconds - m * 60) < 10
                ? "0" + Math.floor(seconds - m * 60)
                : Math.floor(seconds - m * 60);
            return m + ":" + s;
        }


        function playVideo() {
            if($video[0].paused) {
                $video[0].play();
                $video_controls.addClass("playing");
                $video_head.addClass("playing");
                $video.addClass('playing');

            } else {
                $video[0].pause();
                $video_controls.removeClass("playing");
                $video_head.removeClass("playing");
                $video.removeClass('playing');
            }
        }
        $video.on('ended',function(){
            $video_controls.removeClass("playing");
            $video.removeClass('playing');
            $video_head.removeClass("playing");
        });


        // Fuul screen function
        function launchFullscreen() {
            if ($video[0].requestFullscreen) {
                $video[0].requestFullscreen();
            } else if ($video[0].mozRequestFullScreen) {
                $video[0].mozRequestFullScreen();
            } else if ($video[0].webkitRequestFullscreen) {
                $video[0].webkitRequestFullscreen();
            } else if ($video[0].msRequestFullscreen) {
                $video[0].msRequestFullscreen();
            }
        }


        // $video.click(function() {
        //     playVideo();
        // });

        $video.on("loadedmetadata", function() {
            $current.text(time_format(0));
            // setTimeout(startBuffer, 150);
        });
        // Play/pause on video click

        $video.on("timeupdate", function() {
            $current.text(time_format($video[0].currentTime));
        });




        // Full Screen Button
        $full_screen_video.click(function() {
            launchFullscreen();
        });
        $video.click(function() {
            playVideo();
        });
        $play_button.click(function() {
            playVideo();
        });
    });

    // Button hover animation
    function buttonEnterAnimationTest1() {
        let btn = $('.btn-circle');
        btn.each(function( i ) {
            let $thisBtn = $(this);
            $thisBtn.mouseenter(function() {
                // setTimeout(function() {
                    $thisBtn.addClass("btn-circle-anim-first");
                // }, 300);
                if( $thisBtn.hasClass("btn-circle-anim-back") ) {
                    // setTimeout(function () {
                        $thisBtn.removeClass("btn-circle-anim-back");
                    // }, 300);

                }
            });
            $thisBtn.mouseleave(function(){
                setTimeout(function() {
                    $thisBtn.addClass("btn-circle-anim-back");
                },300);
                // $thisBtn.addClass("btn-circle-anim-back");
                if( $thisBtn.hasClass("btn-circle-anim-first") ) {
                    setTimeout(function () {
                        $thisBtn.removeClass("btn-circle-anim-first");
                    }, 300);
                    // $thisBtn.removeClass("btn-circle-anim-first");
                }
            });
        });
    }




    // $('.mention-item').each(function() {
    //     console.log($(this));
    //     // let $video_item = $(this).find('.video-element');
    //     if($(this).hasClass('slick-active')) {
    //         // $video_item.addClass('video-active');
    //         console.log('Video Active');
    //     }
    //     else {
    //         console.log('Not');
    //     }
    // });

    // Play/stop video
    // function videoActive() {
    //     let $videoBlock
    // }

    // $('.mention-item').each(function() {
    //     console.log($(this));
    //     // let $video_item = $(this).find('.video-element');
    //     if($(this).hasClass('slick-active')) {
    //         // $video_item.addClass('video-active');
    //         console.log('Video Active');
    //     }
    //     else {
    //         console.log('Not');
    //     }
    // });







//     // Scrolling sections
//     // Sections scroll
//     // Collecting the sections
//     var $sections = $(".section-block");
//
// // Variable to hold the current section index
//     var currentIndex = 0;
//
// // Variable to hold the animation state
//     var isAnimating = false;
//
// // Define the animation finish callback
//     var stopAnimation = function() {
//         // We add the 300 ms timeout to debounce the mouse wheel event
//         setTimeout(function() {
//             // Set the animation state to false
//             isAnimating = false;
//         }, 100);
//     };
//
// // Function returns true if DOM element bottom is reached
//     var bottomIsReached = function($elem) {
//         var rect = $elem[0].getBoundingClientRect();
//         return rect.bottom <= $(window).height();
//     };
//
// // Function returns true if DOM element top is reached
//     var topIsReached = function($elem) {
//         var rect = $elem[0].getBoundingClientRect();
//         return rect.top >= 0;
//     };
// // Define wheel event handler
//     document.addEventListener(
//         "wheel",
//         function(event) {
//             // If animation is in progress
//             if (isAnimating) {
//                 // Just prevent the default mouse wheel behaviour
//                 event.preventDefault();
//                 return;
//             }
//
//             // Get the current section
//             var $currentSection = $($sections[currentIndex]);
//
//             // Get the mouse wheel spin direction
//             var direction = event.deltaY;
//
//             if (direction > 0) {
//                 // If next index is greater than sections count, do nothing
//                 if (currentIndex + 1 >= $sections.length) return;
//                 // If bottom is not reached allow the default behaviour
//                 // if (!bottomIsReached($currentSection)) return;
//                 // Go to next
//                 // Increase the section pointer
//                 currentIndex++;
//                 // Get the next section
//                 var $nextSection = $($sections[currentIndex]);
//                 // Get the next section offset
//                 var offsetTop = $nextSection.offset().top;
//                 // Prevent the default mouse wheel behaviour
//                 event.preventDefault();
//                 // Set the animation state to true
//                 isAnimating = true;
//                 // Animate scroll
//                 $("html, body").animate({ scrollTop: offsetTop }, 300, stopAnimation);
//             } else {
//                 // If previous index is negative, do nothing
//                 if (currentIndex - 1 < 0) return;
//                 // If top is not reached allow the default behaviour
//                 // if (!topIsReached($currentSection)) return;
//                 // Go to prev
//                 // Decrease the section pointer
//                 currentIndex--;
//                 // Get the previous section
//                 var $previousSection = $($sections[currentIndex]);
//                 // Get the previous section offset
//                 var offsetTop = $previousSection.offset().top;
//                 // Prevent the default mouse wheel behaviour
//                 event.preventDefault();
//                 // Set the animation state to true
//                 isAnimating = true;
//                 // Animate scroll
//                 $("html, body").animate({ scrollTop: offsetTop }, 100, stopAnimation);
//             }
//         },
//         { passive: false }
//     );


    $(document).ready(function() {
        mobileMenu();
        // buttonEnterAnimation();
        // buttonLeaveAnimation();
        // setTimeout(function () {
        //     btnCircle[i].classList.add('btn-circle-anim-back');
        // },300);
        buttonEnterAnimationTest1();

        $('.clients-mentions').each(function(){
            initializeSlider( $(this) );
        });
        $('.posts-slider-wrap').each(function(){
            initializePostsslider($(this));
        });


        // sliderVideoControl();
        secondWordWrap();
        secondGreenBgItalic();



        function scrollHero() {
            // if( $('.hero').hasClass('hero-top') ){
            //     $('.hero').removeClass('hero-top');
            // }
            $('.hero .img-gif2').addClass('imggif2-anim');
            $(".hero .img-giff").addClass( 'imggif-anim' );
            $('.hero .btn-hero').addClass('btn-hero-anim');
            $('.hero .hero-footer--text').addClass( 'hero-text-anim' );
            titleAnimation();

        }
        window.addEventListener("scroll", scrollHero);

        // Hero in viewport
        // Hero in viewport
        // $(window).scroll(function() {
        //     var scrollTop = $(window).scrollTop();
        //     if (scrollTop <= 0) {
        //         $(".hero").addClass("hero-top");
        //     } else {
        //         $(".hero").removeClass("hero-top");
        //     }
        // });
        var oldScrollY = window.scrollY;
        var heroTopClass = $('.hero').hasClass('hero-top');
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if(oldScrollY < window.scrollY){
                if( $('.hero').hasClass('hero-top') ){
                    $('.hero').removeClass('hero-top');
                }
            } else {
                if (scrollTop < 500 ) {
                    if(!heroTopClass){
                        $(".hero").addClass("hero-top");
                    }

                } else {
                    $(".hero").removeClass("hero-top");
                }
            }
            oldScrollY = window.scrollY;

        });



    }); // ready

    $(window).on('resize', function() {
    }); // resize

    $(window).on('load', function() {
    }); // load

    // functions
})(this.jQuery);