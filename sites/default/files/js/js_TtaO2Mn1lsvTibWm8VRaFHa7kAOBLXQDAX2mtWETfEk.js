(function ($) {
	$(document).ready(function() {

		/* EXTERNAL LINKS */
		//External Link Notification - Leaving the Site
  	var externalLinks = $('a').filter(function() { return this.hostname && this.hostname !== location.hostname; })
  	externalLinks.attr('rel', ' external ').attr('target', '_blank').click(function () {
  	   var x=window.confirm('You are about to proceed to an offsite link.  Mechanicusllc.com has no control over the content of this site.  Click OK to proceed.');
  	   var val = false;
  	   if (x)
  	   val = true;
  	   else
  	   val = false;
  	   return val;
  	});


    //============================
    // Resize Front Bottom Blocks
    //============================
    $('.service-tab a').click(function (event) {
      event.preventDefault();
    });
    $('.service-tab').click(function (event) {
      var classesString = $(this).attr('class');
      var classExplode = classesString.split(" ");
      var classTab = classExplode[1];
      var classContent = classTab.replace("tab","content");
      $('.service-tab').removeClass('active');
      $('.service-content').removeClass('active');
      $(this).addClass('active');
      $('.'+classContent).addClass('active');
      resizeServicesContent();
    });
    resizeServicesContent();
    function resizeServicesContent() {
      $('#front-page-services-content').height($('.service-content.active').outerHeight());
    }


    //============================
    // Resize Front Bottom Blocks
    //============================
    var lnMid = $('.front #ln-mid').outerHeight();
    var cbMid = $('.front #cb-mid').outerHeight();
    if (lnMid > cbMid) {
      $('.front #cb-mid').height(lnMid);
    } else if (cbMid > lnMid) {
      $('.front #ln-mid').height(cbMid);
    };

    //============================
    // Resize Footer Subsections
    //============================
    var fs = new Array();
    fs['lft'] = $('#footer-subsection-content-left').outerHeight();
    fs['mid'] = $('#footer-subsection-content-mid').outerHeight();
    fs['rht'] = $('#footer-subsection-content-right').outerHeight();
    var fsmax = Math.max(fs['lft'],fs['mid'],fs['rht']);
    $('#footer-subsection-content-left').height(fsmax);
    $('#footer-subsection-content-mid').height(fsmax);
    $('#footer-subsection-content-right').height(fsmax);

	});
})(jQuery);
;
