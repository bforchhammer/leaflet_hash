(function ($) {
  $(document).on('leaflet.features', function (e, initial, leaflet) {
    console.debug(leaflet);
    if (initial && leaflet.map_definition.plugins.hash) {
      new L.Hash(leaflet.lMap);
    }
  });
})(jQuery);
