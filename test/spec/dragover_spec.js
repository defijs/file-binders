import bindNode from '../../../matreshka_refactoring/src/bindnode';
import dragOver from '../../src/dragover';

describe('dragOver binder', () => {
    const { document, CustomEvent } = window;

    let node;

    beforeEach(() => {
        node = document.createElement('div');
    });

    it('bound property gets correct values on corresponding events', () => {
        const obj = {};

        bindNode(obj, 'dragovered', node, dragOver());

        expect(obj.dragovered).toEqual(false, 'should be false by default');

        node.dispatchEvent(new CustomEvent('dragover'));
        expect(obj.dragovered).toEqual(true, 'should become true on dragover');

        node.dispatchEvent(new CustomEvent('drop'));
        expect(obj.dragovered).toEqual(false, 'should become false on drop');

        node.dispatchEvent(new CustomEvent('foobar'));
        expect(obj.dragovered).toEqual(false, 'should not be changed on foobar');

        node.dispatchEvent(new CustomEvent('dragenter'));
        expect(obj.dragovered).toEqual(true, 'should become true on dragenter');

        node.dispatchEvent(new CustomEvent('foobar'));
        expect(obj.dragovered).toEqual(true, 'should not be changed on foobar');

        node.dispatchEvent(new CustomEvent('dragleave'));
        expect(obj.dragovered).toEqual(false, 'should become false on dragleave');
    });
});
