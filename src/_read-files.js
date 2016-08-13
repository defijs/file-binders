export default function readFiles(files, fileReaderMethodName, callback) {
    const { length } = files;
    const arrayOfFiles = Array(length);

    if(fileReaderMethodName) {
        let j = 0;
        for(let i = 0; i < length; i++) {
            const reader = new FileReader();
            const file = files[i];

            arrayOfFiles[i] = file;

            reader.addEventListener('loadend', (evt) => {
				file.readerResult = reader.result;
				if (++j === length) {
					callback(arrayOfFiles);
				}
			});

            reader[fileReaderMethodName](file)
        }
    } else {
        for(let i = 0; i < length; i++) {
            arrayOfFiles[i] = files[i];
        }

        callback(arrayOfFiles);
    }
}
