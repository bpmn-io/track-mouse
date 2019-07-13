# @bpmn-io/track-mouse

[![Build Status](https://travis-ci.com/bpmn-io/track-mouse.svg?branch=master)](https://travis-ci.com/bpmn-io/track-mouse)

Tracks the mouse on a [diagram-js diagram](https://github.com/bpmn-io/diagram-js) and periodically logs mouse position and hover state to the developer console.


## Usage

```javascript
import TrackMouseModule from '@bpmn-io/track-mouse';

import BpmnViewer from 'bpmn-js';

const viewer = new BpmnViewer({
  additionalModules: [
    TrackMouseModule
  ]
});
```


## License

MIT
