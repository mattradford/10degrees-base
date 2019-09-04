/**
 *
 * To create new scripts create a partial inside src and right your code there either inside
 * a function or object oriented.
 *
 * Then call it on the relevant page below or in the common function to be run on every page.
 *
 */

// Require the classes
window.$ = require("jquery");

import AjaxForm from "./_ajaxForm";
import Magnific from "./_magnific";
import MobileNav from "./_mobile-nav";
import ScrollToError from "./_scrollToError";
import ScrollToId from "./_scrollToId";
import Slider from "./_slider";

(function($) {
  var App = {
    // All pages
    common: {
      init: function() {
        new MobileNav().init();
        new ScrollToId().init();
        new ScrollToError().init();
        new Slider().init();
        new Magnific().init();
        new AjaxForm().init();
      }
    },
    // Home page
    home: {
      init: function() {
        // JavaScript to be fired on the home page
      }
    },
    // About us page, note the change from about-us to about_us.
    about_us: {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var namespace = App;
      funcname = funcname === undefined ? "init" : funcname;
      if (
        func !== "" &&
        namespace[func] &&
        typeof namespace[func][funcname] === "function"
      ) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      UTIL.fire("common");

      $.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(
        i,
        classnm
      ) {
        UTIL.fire(classnm);
      });
    }
  };

  $(document).ready(UTIL.loadEvents());
})(jQuery); // Fully reference jQuery after this point.
