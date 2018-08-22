This package provides a dummy text editor that does one thing: take a value from `editorOptions.value` and sets it as a value.
It could be useful when doing something unusual with [Dynamic Client-side Configuration](Processinghttps://neos.readthedocs.io/en/stable/CreatingASite/NodeTypes/DynamicConfigurationProcessing.html).
Anyways, see an example below.

## Installation

1. `composer require '@codeq/passthrougheditor'`
2. Start using the editor in NodeTypes.yaml, e.g.:

```
Some:NodeType:
  properties:
    geopoint:
      type: Ttree\GoogleMapEditor\GeoPoint
      ui:
        inspector:
          editor: Ttree.GoogleMapEditor/Inspector/Editors/GeoPointEditor
          group: 'geo'
    latitude:
      type: string
      ui:
        inspector:
          editor: CodeQ.PassthroughEditor/Inspector/Editors/PassthroughEditor
          editorOptions:
            value: 'ClientEval:node.properties.geopoint && node.properties.geopoint[0]'
          group: 'geo'
```

In this example we get the latitude from geopoint property and save it in latitude property.
