import {
  bootstrapViewer,
  inject
} from 'bpmn-js/test/helper';

import Module from '..';

var bpmnXML = require('./process.bpmn');


describe('@bpmn-io/track-mouse', function() {

  beforeEach(bootstrapViewer(bpmnXML, {
    additionalModules: [
      Module
    ]
  }));


  it('should track to console', inject(function() {

  }));

});
