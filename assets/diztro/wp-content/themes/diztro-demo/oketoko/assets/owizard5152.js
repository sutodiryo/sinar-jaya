/*!
* jQuery Wizard - http://www.bootstrapwizard.com/
*/
!function(n){var t=function(t,i){t=n(t);var e=this,o='li:has([data-toggle="tab"])',a=n.extend({},n.fn.bootstrapWizard.defaults,i),r=null,s=null;this.rebindClick=function(n,t){n.unbind("click",t).bind("click",t)},this.fixNavigationButtons=function(){if(r.length||(s.find("a:first").tab("show"),r=s.find(o+":first")),n(a.previousSelector,t).toggleClass("disabled",e.firstIndex()>=e.currentIndex()),n(a.nextSelector,t).toggleClass("disabled",e.currentIndex()>=e.navigationLength()),e.rebindClick(n(a.nextSelector,t),e.next),e.rebindClick(n(a.previousSelector,t),e.previous),e.rebindClick(n(a.lastSelector,t),e.last),e.rebindClick(n(a.firstSelector,t),e.first),a.onTabShow&&"function"==typeof a.onTabShow&&!1===a.onTabShow(r,s,e.currentIndex()))return!1},this.next=function(n){return!t.hasClass("last")&&((!a.onNext||"function"!=typeof a.onNext||!1!==a.onNext(r,s,e.nextIndex()))&&($index=e.nextIndex(),void($index>e.navigationLength()||s.find(o+":eq("+$index+") a").tab("show"))))},this.previous=function(n){return!t.hasClass("first")&&((!a.onPrevious||"function"!=typeof a.onPrevious||!1!==a.onPrevious(r,s,e.previousIndex()))&&($index=e.previousIndex(),void($index<0||s.find(o+":eq("+$index+") a").tab("show"))))},this.first=function(n){return(!a.onFirst||"function"!=typeof a.onFirst||!1!==a.onFirst(r,s,e.firstIndex()))&&(!t.hasClass("disabled")&&void s.find(o+":eq(0) a").tab("show"))},this.last=function(n){return(!a.onLast||"function"!=typeof a.onLast||!1!==a.onLast(r,s,e.lastIndex()))&&(!t.hasClass("disabled")&&void s.find(o+":eq("+e.navigationLength()+") a").tab("show"))},this.currentIndex=function(){return s.find(o).index(r)},this.firstIndex=function(){return 0},this.lastIndex=function(){return e.navigationLength()},this.getIndex=function(n){return s.find(o).index(n)},this.nextIndex=function(){return s.find(o).index(r)+1},this.previousIndex=function(){return s.find(o).index(r)-1},this.navigationLength=function(){return s.find(o).length-1},this.activeTab=function(){return r},this.nextTab=function(){return s.find(o+":eq("+(e.currentIndex()+1)+")").length?s.find(o+":eq("+(e.currentIndex()+1)+")"):null},this.previousTab=function(){return e.currentIndex()<=0?null:s.find(o+":eq("+parseInt(e.currentIndex()-1)+")")},this.show=function(n){return isNaN(n)?t.find(o+" a[href=#"+n+"]").tab("show"):t.find(o+":eq("+n+") a").tab("show")},this.disable=function(n){s.find(o+":eq("+n+")").addClass("disabled")},this.enable=function(n){s.find(o+":eq("+n+")").removeClass("disabled")},this.hide=function(n){s.find(o+":eq("+n+")").hide()},this.display=function(n){s.find(o+":eq("+n+")").show()},this.remove=function(t){var i=t[0],e=void 0!==t[1]&&t[1],a=s.find(o+":eq("+i+")");if(e){var r=a.find("a").attr("href");n(r).remove()}a.remove()};var d=function(t){var i=s.find(o).index(n(t.currentTarget).parent(o));if(a.onTabClick&&"function"==typeof a.onTabClick&&!1===a.onTabClick(r,s,e.currentIndex(),i))return!1},l=function(t){$element=n(t.target).parent();var i=s.find(o).index($element);return!$element.hasClass("disabled")&&((!a.onTabChange||"function"!=typeof a.onTabChange||!1!==a.onTabChange(r,s,e.currentIndex(),i))&&(r=$element,void e.fixNavigationButtons()))};this.resetWizard=function(){n('a[data-toggle="tab"]',s).off("click",d),n('a[data-toggle="tab"]',s).off("shown shown.bs.tab",l),s=t.find("ul:first",t),r=s.find(o+".active",t),n('a[data-toggle="tab"]',s).on("click",d),n('a[data-toggle="tab"]',s).on("shown shown.bs.tab",l),e.fixNavigationButtons()},s=t.find("ul:first",t),r=s.find(o+".active",t),s.hasClass(a.tabClass)||s.addClass(a.tabClass),a.onInit&&"function"==typeof a.onInit&&a.onInit(r,s,0),a.onShow&&"function"==typeof a.onShow&&a.onShow(r,s,e.nextIndex()),n('a[data-toggle="tab"]',s).on("click",d),n('a[data-toggle="tab"]',s).on("shown shown.bs.tab",l)};n.fn.bootstrapWizard=function(i){if("string"==typeof i){var e=Array.prototype.slice.call(arguments,1);return 1===e.length&&e.toString(),this.data("bootstrapWizard")[i](e)}return this.each(function(e){var o=n(this);if(!o.data("bootstrapWizard")){var a=new t(o,i);o.data("bootstrapWizard",a),a.fixNavigationButtons()}})},n.fn.bootstrapWizard.defaults={tabClass:"nav nav-pills",nextSelector:".wizard li.next",previousSelector:".wizard li.previous",firstSelector:".wizard li.first",lastSelector:".wizard li.last",onShow:null,onInit:null,onNext:null,onPrevious:null,onLast:null,onFirst:null,onTabChange:null,onTabClick:null,onTabShow:null}}(jQuery);

$(document).ready(function() {
	// Step by Step Form
	$('.wizard-card').bootstrapWizard({
		'tabClass': 'nav nav-pills',
		'nextSelector': '.btn-next',
		'previousSelector': '.btn-previous',

		onNext: function(tab, navigation, index) {
			var $valid = $('.wizard-card form').valid();
			if(!$valid) {
				//$validator.focusInvalid();
				return false;
			}
		},

		onInit : function(tab, navigation, index){

		  //check number of tabs and fill the entire row
		  var $total = navigation.find('li').length;
		  $width = 100/$total;

		  navigation.find('li').css('width',$width + '%');

		},

		onTabClick : function(tab, navigation, index){

			var $valid = $('.wizard-card form').valid();

			if(!$valid){
				return false;
			} else{
				return true;
			}

		},

		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index+1;

			var $wizard = navigation.closest('.wizard-card');

			// If it's the last tab then hide the last button and show the finish instead
			if($current >= $total) {
				$($wizard).find('.btn-next').hide();
				$($wizard).find('.btn-finish').show();
			} else {
				$($wizard).find('.btn-next').show();
				$($wizard).find('.btn-finish').hide();
			}

			//update progress
			var move_distance = 100 / $total;
			move_distance = move_distance * (index) + move_distance / 2;

			$wizard.find($('.progress-bar')).css({width: move_distance + '%'});
			//e.relatedTarget // previous tab

			$wizard.find($('.wizard-card .nav-pills li.active a .icon-circle')).addClass('checked');

		}
	});
});