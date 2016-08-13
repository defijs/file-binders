import getFileReaderMethodName from './_get-filereader-method-name';
import readFiles from './_read-files';

function createFileChangeHandler({
    callback,
    methodName
}) {
    return function fileChangeHandler(event) {
        const { files } = this;

        if (files.length) {
			readFiles(files, methodName, callback);
		} else {
			callback([]);
		}
    }
}

export default function fileBinder(readAs) {
    const methodName = readAs ? getFileReaderMethodName(readAs) : null;
    let fileChangeHandler;

    return {
        on(callback) {
            fileChangeHandler = createFileChangeHandler({
                callback,
                methodName
            });
            this.addEventListener('change', fileChangeHandler);
        },
        destroy() {
            this.removeEventListener('change', fileChangeHandler);
        },
        getValue({ domEvent }) {
            const files = domEvent || [];
			return this.multiple ? files : files[0] || null;
        },
        setValue: null
    }
}
