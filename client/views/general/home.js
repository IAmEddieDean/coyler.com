'use strict';

angular.module('coyler')
.controller('HomeCtrl', function(){
  angular.element('.materialboxed').materialbox();
  angular.element('.modal-trigger').leanModal();
});
