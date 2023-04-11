// nav

/*
$(document).ready(function () {
    $(".header-bg").hide();
    $("header").mouseenter(function(){
        $(".header-bg").stop().slideDown();
        $(".pc_nav li a, .sign_box li a").css("color", "#151515")
        $(".pc_nav >li").addClass("on")
    });
    $("header").mouseleave(function(){
      $(".header-bg").stop().slideUp();
      $(".pc_nav li a, .sign_box li a").css("color", "#ddd")
      $(".pc_nav >li").removeClass("on")
  });
  });
*/
$(function(){
	$('.pc_nav> li').mouseover(function(){
		$(this).children('.pc_nav_sub').stop().slideDown();
	});
	$('.pc_nav> li').mouseleave(function(){
		$(this).children('.pc_nav_sub').stop().slideUp();
	});
});

$(function(){
    $('header').mouseover(function(){
        $(".header-bg").stop().fadeIn();
    });
    $('header').mouseleave(function(){
        $(".header-bg").stop().fadeOut();
    });
});
// sub-nav

/*
$(document).ready(function () {
    $(".pc_nav li").mouseover(function(){
        $(this).children(".pc-sub-nav").stop().slideDown();
    });
    $(".pc_nav li").mouseleave(function(){
        $(this).children(".pc-sub-nav").stop().slideUp();
    });
});
*/


// m-nav
$(document).ready(function(){
 
    $('.m-menu_btn').on('click', function(){
        $('.m-menu_bg').show();
        $('.sidebar_menu').show().animate({
            left:0
        });  
        $('html, body').addClass('hidden');
    });

    $('.close_btn').on('click', function(){
        $('.m-menu_bg').hide(); 
        $('.sidebar_menu').animate({
            left: '-' + 80 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });
        $('html, body').removeClass('hidden')  
    });
    document.querySelector('.m-menu_bg').addEventListener('click', function(e){
        document.querySelector(".close_btn").click();
    });             


});



// page-up
$(document).ready(function () {
    $(".top_up>a").click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if (height > 500) {
			$('.top_up').fadeIn();
		} else {
			$('.top_up').fadeOut();
		}
	});
});


 // slidetoggle
 $(function(){
     $(".mdetail-wrap> li").click(function(){
         $(this).children(".detail-trim").slideToggle()
     });
 });


// option
$(function(){
    $(".o_sch_btn").click(function(){
        $(this).siblings(".option-text").slideToggle()
    });
});



/*
$(".item-wish-btn").on("click", function(e){
	var $this = $(this);//element a
    console.log("aaaaa");
	$this.find(">img").attr("src", function(index, attr){
		if(attr.match('wish')){console.log("bbbb");
			return attr.replace("wish.png", "wish-after.png");
		}else{console.log("ccc");
			return attr.replace("wish-after.png", "wish.png");
		}
	});
});
*/

// gride-btn
  $(function() {
    $(".grid-1-btn").on("click", function() {
        $(this).parent().siblings(".item-list-wrap").children(".item-list").addClass("grid-1");
        console.log("aaaa")
        $(this).parent().siblings(".item-list-wrap").children(".item-list").removeClass("grid-2 , grid-3");
        $(this).addClass("grid-on")
        $(this).siblings().removeClass("grid-on")
    });

    $(".grid-2-btn").on("click", function() {
        $(this).parent().siblings(".item-list-wrap").children(".item-list").removeClass("grid-1 , grid-3");
    });

    $(".grid-3-btn").on("click", function() {
        $(this).parent().siblings(".item-list-wrap").children(".item-list").addClass("grid-3");
        $(this).parent().siblings(".item-list-wrap").children(".item-list").removeClass("grid-1");
    });
    $(".grid-btn li").click(function(){
        $(this).addClass("grid-on");
        $(this).siblings().removeClass("grid-on")
    });
});


// $(function() {
//     $("#grid-1-btn").on("click", function() {
//         $(".item-list").addClass("grid-1");
//         $(".item-list").removeClass("grid-2 , grid-3");
//         $(this).addClass("grid-on")
//         $(this).siblings().removeClass("grid-on")
//     });

//     $("#grid-2-btn").on("click", function() {
//         $(".item-list").removeClass("grid-1 , grid-3");
//     });

//     $("#grid-3-btn").on("click", function() {
//         $(".item-list").addClass("grid-3");
//         $(".item-list").removeClass("grid-1");
//     });
//     $(".grid-btn li").click(function(){
//         $(this).addClass("grid-on");
//         $(this).siblings().removeClass("grid-on")
//     });
// });

// img change
var MainImg = document.querySelector('#main-img');
var ImgList = document.querySelectorAll('.detail-imgs');
var Open = false;

for(var i =0; i<ImgList.length; i++){
    ImgList[i].addEventListener('mouseenter', function(){
        MainImg.setAttribute('src', this.src);
    })
}


// hover
$(function() {
    $(".item-list").on("mouseenter", function() {
        $(this).addClass("hover");
    });
    $(".item-list").on("mouseleave", function() {
        $(this).removeClass("hover");
    });
});


// faq
$(function(){
    $(".faq_click").off('click').click(function(){
        $(this).siblings().children("dd").slideToggle()
    });
});

// qna
$(function(){
    $(".qna_title").off('click').click(function(){
        $(this).siblings(".qna_content").slideToggle()
    });
});

// // review
// $(function(){
//     $(".review_title").off('click').click(function(){
//         $(this).siblings(".review_content").slideToggle()
//     });
// });


 


//   img_upload

function recall_img(input)
{
	console.log("변경");
    if(input.files && input.files[0])
	{
        var reader = new FileReader();
        reader.onload = function (e)
		{
            $( "#recall_img_box" ).attr("src", e.target.result );
            $( "#recall_img_box" ).addClass( "recall_sub_img" );
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#recall_img").on('change', function(){
    recall_img(this);
});

$("#img-delete").click(function(event) {
	$( "#recall_img_box" ).attr("src", "/images/no_img.jpg" );
	$('#recall_img').val('');
});





$(function(){
    $(".faq_click").click(function(){
        $(this).children(".mobile-btn-1").toggleClass("up")
    });
});


// cart-modal
// $(document).ready(function(){
//     $('.item_cart_btn').on('click', function(){
//     });
   
//     $('.c_modal_close_btn').on('click', function(){
//         $('.c_modal_bg').hide(); 
//         $('.cart_modal_wrap').hide();          
//         $('html, body').removeClass('hidden')  
//     });
//     document.querySelector('.c_modal_bg').addEventListener('click', function(e){
//         document.querySelector(".c_modal_close_btn").click();
//     });             
//    });

// m-nav-sub-down

$(function(){
    $(".m-sub-btn").click(function(){
        $(this).children(".m-sub-nav").slideToggle(200)
        $(this).find(".mobile-btn-1").toggleClass("up")
    });
});


 AOS.init();
