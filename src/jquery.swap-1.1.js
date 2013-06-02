/*
 * jQuery Swap plug-in 1.0
 *
 * Copyright (c) 2011 Alejandro Etchegoyen 
 *
 * http://www.etchegoyen.net/jquery/jquery-swap/
 *
 * Depends:
 * - jQuery
 *
 * Dual licensed under the MIT and GPL licences:
 * 	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Swaps the selected element with the target element
 */
jQuery.fn.swapWith = function(target) {
    return this.each(function() {
        var c_target = $(target).clone(true);
        var c_this = $(this).clone(true);
        $(target).replaceWith(c_this);
        $(this).replaceWith(c_target);
    });
};

/**
 * Reverts the order of the selected element's children
 */
jQuery.fn.swapGroup = function() {
    return this.each(function() {
        $(this).prependTo($(this).parent());
    });
};

/**
 * Swaps the zIndex property of two elements
 */
jQuery.fn.swapZIndex = function(target) {
    return this.each(function() {
        var $this = $(this);
        var $target = $(target);
        var aux = $target.css("z-index");
        $target.css("z-index",$this.css("z-index"));        
        $this.css("z-index",aux);
    });
};