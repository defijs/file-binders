import getFileReaderMethodName from './_get-filereader-method-name';
import readFiles from './_read-files';

function createDropHandler({
    callback,
    methodName
}) {
    return function dropHandler(event) {
        event.preventDefault();
		const files = event.dataTransfer.files;

		if (files.length) {
		    readFiles(files, methodName, callback);
		} else {
			callback([]);
		}
    }
}

function createDragoverHandler() {
    return function dragoverHandler(event) {
        event.preventDefault();
		event.dataTransfer.dropEffect = 'copy';
    }
}

export default function dropFilesBinder(readAs) {
    const methodName = readAs ? getFileReaderMethodName(readAs) : null;
    let dropHandler;
    let dragoverHandler;

    return {
        on(callback) {
            dropHandler = createDropHandler({
                callback,
                methodName
            });
            dragoverHandler = createDragoverHandler();

            this.addEventListener('drop', dropHandler);
            this.addEventListener('dragover', dragoverHandler);
        },
        destroy() {
            this.removeEventListener('drop', dropHandler);
            this.removeEventListener('dragover', dragoverHandler);
        },
        getValue({ domEvent }) {
			return domEvent || [];
		},
        setValue: null
    }
}
