// JavaScript Document
document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  })
// $(document).ready(function() {
//     $( window ).scroll(function() {
//           var height = $(window).scrollTop();
//           if(height >= 100) {
//               $('.top-head').addClass('fixed-menu');
//           }
//       });
//   });

// menu details slide
// thumbnails.carousel.js jQuery plugin


$(".whish-bn1").click(function() {
  $(this).toggleClass("whise-save");
  
});

// menu details silde ends

// quantity
(function () {
  "use strict";
  var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
    return function (arg) {
      if (this.length > 1) {
        this.each(function () {
          var $this = $(this);

          if (!$this.data(ident)) {
            $this.data(ident, func($this, arg));
          }
        });

        return this;
      } else if (this.length === 1) {
        if (!this.data(ident)) {
          this.data(ident, func(this, arg));
        }

        return this.data(ident);
      }
    };
  });
})();

(function () {
  "use strict";
  function Guantity($root) {
    const element = $root;
    const quantity = $root.first("data-quantity");
    const quantity_target = $root.find("[data-quantity-target]");
    const quantity_minus = $root.find("[data-quantity-minus]");
    const quantity_plus = $root.find("[data-quantity-plus]");
    var quantity_ = quantity_target.val();
    $(quantity_minus).click(function () {
      quantity_target.val(--quantity_);
    });
    $(quantity_plus).click(function () {
      quantity_target.val(++quantity_);
    });
  }
  $.fn.Guantity = jQueryPlugin("Guantity", Guantity);
  $("[data-quantity]").Guantity();
})();

// active menu
var selector = '.sixe-menu-q li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

// rating js

// fiter mobile js

jQuery(function($){
  // Filter Function Triggers
  filterTrigger.desktopFilter(".filt-container");
  filterTrigger.mobileFilter("#mobile-filter", ".filt-container");
});
     
// FUNCTION FOR ALL FILTERS
var filterTrigger = {
  desktopFilter: function(container) {
      if( $(container).length > 0 ) {
          var $container = $(container);
          var $filter = $(".filter-list").find("li").first().data("filter");
          
          var mixer = mixitup($container, {
              load: {
                filter: $filter
              }
          });
          
          $(".filter").on("click", function() {
              if( $("#mobile-filter").length > 0 ) {
                  $("#mobile-filter").val($(this).data("filter"));
              }
          });
      }
  },
  
  mobileFilter: function(filter, container) {
      if( $(filter).length > 0 && $(container).length > 0 ) {
          var $filter = $(filter),
            $container = $(container);

          $container.mixItUp();

          $filter.on('change', function(){
              $container.mixItUp('filter', this.value);
          });
          
          $(window).resize(function() {
              
          });
      }
  }
}


// filter mobile js ends


$(document).ready(function () {
	$(".star label").click(function(){
	  $(this).parent().find("label").css({"background-color": "#f7a100"});
	  $(this).css({"background-color": "#f7a100"});
	  $(this).nextAll().css({"background-color": "#f7a100"});
	});
	$(".star label").click(function(){
	  $(this).parent().find(".star label").css({"color": "#bbb"});
	  $(this).css({"color": "#f7a100"});
	  $(this).nextAll().css({"color": "#f7a100"});
	  $(this).css({"background-color": "transparent"});
	  $(this).nextAll().css({"background-color": "transparent"});
	});
});



$(function () {
    $("#datepicker").datepicker({ 
            autoclose: true, 
            todayHighlight: true
    }).datepicker('update', new Date());
});


// read more
$(document).ready(function() {
    $('.moreless-button').click(function() {
      $('.moretext-div1').slideToggle();
      if ($('.moreless-button').text() == "View Less") {
        $(this).text("View More")
      } else {
        $(this).text("View Less")
      }
    });


    $('.moreless-button2').click(function() {
      $('.moretext-div2').slideToggle();
      if ($('.moreless-button2').text() == "View Less") {
        $(this).text("View More")
      } else {
        $(this).text("View Less")
      }
    });

    $('.moreless-button3').click(function() {
      $('.moretext-div3').slideToggle();
      if ($('.moreless-button3').text() == "View Less") {
        $(this).text("View More")
      } else {
        $(this).text("View Less")
      }
    });

    $('.moreless-button4').click(function() {
      $('.moretext-div4').slideToggle();
      if ($('.moreless-button4').text() == "View Less") {
        $(this).text("View More")
      } else {
        $(this).text("View Less")
      }
    });

});

$(document).ready(function() {
  $('.pmenu-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        667: {
          items:2
        },
        768: {
          items:2
        },
        1000: {
            items:4
        }
    }
  })

  $('.speacial-menu').owlCarousel({
    loop: true,
    autoplay: true,
    loop: true,
    margin: 30,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        667: {
          items:2
        },
        768: {
          items:3
        },
        1000: {
            items:3
        }
    }
  });


  $('.comboo-menu').owlCarousel({
    loop: true,
    autoplay: true,
    loop: true,
    margin: 30,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        667: {
          items:2
        },
        768: {
          items:3
        },
        1000: {
            items:3
        }
    }
  });


  $('.review-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        
        1000: {
            items:1
        }
    }
  })

  $('.mobile-combo-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        
        1000: {
            items:1
        }
    }
  })

  $('.review-carousel2').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        1000: {
            items:1
        }
    }
  })


  $('.chef-slid').owlCarousel({
    loop: true,
    margin:20,
    nav: false,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        667: {
          items:2
        },
        768: {
          items:3
        },
        1000: {
            items:4
        }
    }
  })

});

// checkout js



// ------------step-wizard-------------
 // admision form js
 jQuery(document).ready(function() {
	// click on next button
	jQuery('.form-wizard-next-btn').click(function() {
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = jQuery(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = jQuery(this).val();

			if( thisValue == "") {
				jQuery(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			jQuery(document).find('.wizard-fieldset').each(function(){
				if(jQuery(this).hasClass('show')){
					var formAtrr = jQuery(this).attr('data-tab-content');
					jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if(jQuery(this).attr('data-attr') == formAtrr){
							jQuery(this).addClass('active');
							var innerWidth = jQuery(this).innerWidth();
							var position = jQuery(this).position();
							jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							jQuery(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	jQuery('.form-wizard-previous-btn').click(function() {
		var counter = parseInt(jQuery(".wizard-counter").text());;
		var prev =jQuery(this);
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		jQuery(document).find('.wizard-fieldset').each(function(){
			if(jQuery(this).hasClass('show')){
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if(jQuery(this).attr('data-attr') == formAtrr){
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = jQuery(this).val();
			if( thisValue == "" ) {
				jQuery(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	jQuery(".form-control").on('focus', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().addClass("focus-input");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().removeClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});


// edit checkout

var form_ele = '.form';

// make eveything disabled
var disableFormEdit = function(selector){	
  $(selector).removeClass('form--enabled').addClass('form--disabled');
	$(selector + ' input, ' + selector + ' select, ' + selector + ' button').prop('disabled', true);
}


// make eveything enabled
var enableFormEdit = function(selector){	
	$(selector + ' input, ' + selector + ' select, ' + selector + ' button ').prop('disabled', false);
  $(selector).removeClass('form--disabled').addClass('form--enabled');
}


disableFormEdit(form_ele);


$('.js-toggleForm').click(function(){
   // get the status of form
  var form_status = $(form_ele).hasClass('form--disabled') ? 'disabled' : 'enabled';
  
  // check if disabled or enabled
  switch (form_status){
    case 'disabled':
      enableFormEdit(form_ele);
      $(this).text('Save')
      break;
    case 'enabled':
      disableFormEdit(form_ele);
      $(this).text('Edit')
      break;
  }
});


$(document).ready(function(){
  $("#customRadio1").click(function(){
    $("#ac-2").hide();
  });
  $("#customRadio1").click(function(){
    $("#ac-1").show();
  });
   $("#customRadio2").click(function(){
    $("#ac-1").hide();
  });
  $("#customRadio2").click(function(){
    $("#ac-2").show();
  });
});



// booking js



 