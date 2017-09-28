define(['react', 'lodash', '../reactTemplates/hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',
        render: template
    });
});