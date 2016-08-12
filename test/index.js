const Jasmine = require('jasmine');
const { jsdom } = require('jsdom');

const jasmine = new Jasmine();

global.window = jsdom('<!doctype html><html><body></body></html>').defaultView;

jasmine.loadConfig({
    spec_dir: 'test',
    spec_files: ['spec/*.js']
});

jasmine.execute();
