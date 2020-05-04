$(document).ready(  function (){
    new WOW().init();

    $('.parallax-window').parallax({imageSrc: 'images/bg.jpg'});

    // loading
    $(window).on('load',  function load() {
        $('.loading').delay(3000).fadeOut('fast');
     });
      // count text

    // $('.count').counterUp({
    //     delay: 10,
    //     time: 2000
    // });
    
    // scroll active
    var posNav = $('.menu').offset().top 
    $(window).on("scroll",function(){
        var pos = $(document).scrollTop() 
        if(pos >= posNav)
        {
            $('.btt').addClass("active")
             $('nav').addClass("scaleMenu")
        }
        else
        {
            $('.btt').removeClass("active")
             $('nav').removeClass("scaleMenu")
             
        }

        $('nav .menu ul li').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.data("link"));
            if (refElement.offset().top - 60 <= pos) {
                $('nav .menu ul li').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    
    })  
// active click
    $("#home .bg .content a").click (function (){
       
        $("html,body").animate({ scrollTop: $("#contact").offset().top }, 1000); 
        event.preventDefault();
    })
    $('.open-nav').click( function(){
            $('.menu-responsive ul li a').removeClass('active-list')
               $('.menu-responsive').addClass('show-menu')
         
    })


    $('.menu-responsive ul li:last-child a').click(function(){
    $('.menu-responsive').removeClass('show-menu') 
        event.preventDefault();
    }) 

    $('.menu-responsive ul li a:not(.menu-responsive ul li:last-child a)').click(function(){
       
        $('.menu-responsive ul li a').removeClass('active-list')
        $(this).addClass('active-list')
        let target = $(this).data("link");
        $('html,body').stop().animate({
        scrollTop: $(target).offset().top
        }, 1000);    
        event.preventDefault();
    })


    $('.btt i').click(function(){
        $("html,body").animate({ scrollTop: 0 }, 1000); 
    })

   $(' nav .menu ul li ').click(function() {
    $('nav .menu ul li').removeClass('active')
    $(this).addClass("active")
    let target = $(this).data("link");
        $('html,body').stop().animate({
        scrollTop: $(target).offset().top - 40
        }, 1000);    
        event.preventDefault();
   })

//    filter
    $('.block-content ul li a').click(function(){
        $('.block-content ul li a').removeClass('active')
        $(this).addClass("active")
        var group = $(this).data("filter")
        if(group == '.all'){
            $('.column').isotope({
                filter: "*"
                });
        }
        else{
            $('.column').isotope({
                filter: group
                }); 
        }
    
    })
    // fancybox
    $('.fancybox').fancybox();


    // submit form
   
    
    $('#contact-form').validate({ 
        rules: {
            name: {
                required: true,
                minlength : 8
            },
            phone: {
                required: true,
                minlength: 10,
                number : true
            },
            email : {
                required: true,
                email : true
            }
        },
        
        submitHandler: function (form) { 
            var data = $('#contact-form').serialize()
            $.ajax({
                type : 'get', 
                url : 'https://script.google.com/macros/s/AKfycbyYiNm-OUSsBY8UGGwajJM9qQgZ13P44CSdaapLwT71q-or8rIh/exec',
                dataType:'json',
                data : data
            });
            alert('Thank you !');    
            $(':input').val('')
            
        }
    });

    // https://script.google.com/macros/s/AKfycbyYiNm-OUSsBY8UGGwajJM9qQgZ13P44CSdaapLwT71q-or8rIh/exec

    // Slick slider
    
    var sickPrimary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
    }

    var sickSecondary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.image-slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
    }

    $('.image-slider').slick(sickPrimary);
    $('.text-slider').slick(sickSecondary);
    
})  
