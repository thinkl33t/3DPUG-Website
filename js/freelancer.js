/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    wp_inst = $('header,section').waypoint({
      handler: function(direction) {
        var the_id = this.element.id;
        if (direction=='up')
          the_id = $(this.element).prev()[0].id;

        $('.page-scroll').removeClass('active');
        var $anchor = $('a[href="#' + the_id + '"]')
        $anchor.parent().addClass('active');
        window.history.replaceState({}, '', $anchor.attr('href'));
      }
    });

    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        window.history.replaceState({}, '', $anchor.attr('href'));
        wp_inst.forEach(function(waypoint) {
          waypoint.disable()
        });
        $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            },
            1500,
            'easeInOutExpo',
            function() {
              wp_inst.forEach(function(waypoint) {
                waypoint.enable()
              })
            }
            );
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
