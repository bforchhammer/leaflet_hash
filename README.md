Drupal Leaflet Hash
===================

Integrates the [leaflet-hash](https://github.com/mlevans/leaflet-hash) plugin with the Drupal leaflet module.

Usage
-----

Add the `$map_definition[plugins][hash]` key to your map definition, and set the value to `TRUE` to enable the plugin.

    function MYMODULE_leaflet_map_info() {
      return array(
        'Map Name' => array(
          'label' => 'Some Label',
          'description' => t('Some Description'),
          'settings' => array(
            // ...
          ),
          'layers' => array(
            // ...
          ),
          'plugins' => array(
            'hash' => TRUE,
          )
        ),
      );
    }
