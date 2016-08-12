import file from './file';
import dropFiles from './dropfiles';
import dragOver from './dragover';

// extend binders object in browser environment
if(typeof Matreshka === 'function') {
    const { binders } = Matreshka;

    binders.file = file;
    binders.dropFiles = dropFiles;
    binders.dragOver = dragOver;
}

// export these binders in CJS environment
module.exports = {
    file,
    dropFiles,
    dragOver
}
