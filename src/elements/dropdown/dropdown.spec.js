describe('Semantic-UI: Elements - smDropdown', function() {
  'use strict';

  var $scope, $compile, $rootScope;

  beforeEach(module('semantic.ui.elements.dropdown'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $compile = _$compile_;
  }));

});
