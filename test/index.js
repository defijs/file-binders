const Jasmine = require('jasmine');
const { jsdom } = require('jsdom');

const jasmine = new Jasmine();

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

jasmine.loadConfig({
    spec_dir: 'test',
    spec_files: ['spec/*_spec.js']
});

jasmine.execute();
