(function ($) {
  $(document).on('leaflet.map', function (e, settings, lMap) {
    if (settings.plugins.hash) {
      new L.Hash(lMap);
    }
  });
})(jQuery);
