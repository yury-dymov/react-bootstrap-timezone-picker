import jsdom from 'jsdom';

const doc = new jsdom.JSDOM('<!doctype html><html><body></body></html>');

global.window = doc.window;
global.document = doc.window.document;
global.navigator = {
  userAgent: 'node.js',
};
