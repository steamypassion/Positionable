(function() {

  function mockGetter(obj, prop, mockVal) {
    Object.defineProperty(obj, prop, {
      get: function() { return mockVal; }
    });
  }

  window.mockGetter = mockGetter;

})();
