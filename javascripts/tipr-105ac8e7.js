/*
Tipr drop 1.0
Copyright (c) 2013 Tipue
Tipr is released under the MIT License
http://www.tipue.com/tipr
*/
!function(t){t.fn.tipr=function(i){var e=t.extend({speed:200,mode:"bottom"},i);return this.each(function(){var i=".tipr_container_"+e.mode;t(this).hover(function(){var n='<div class="tipr_container_'+e.mode+'"><div class="tipr_point_'+e.mode+'"><div class="tipr_content">'+t(this).attr("data-tip")+"</div></div></div>";t(this).append(n);var r=t(i).outerWidth(),o=t(this).width(),d=o/2-r/2;t(i).css("margin-left",d+"px"),t(this).removeAttr("title"),t(i).fadeIn(e.speed)},function(){t(i).remove()})})}}(jQuery);