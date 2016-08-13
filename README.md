# matreshka-binders-file

Matreshka.js binders for file drag'n'drop and file input
In active development...

## ``file(readAs)``
Returns a binder for file input. The binder allows not only to get basic data about a file, but also to read it without calling ``FileReader`` manually.

If ``readAs`` argument isn’t set, input value gets into the bound property after its changing (on "change" DOM event). If ``readAs`` is set, binder will read the file and transform it into the needed format (data URI, Blob...) and only after reading the file, the property will be changed.

The file (native ``File``) or an array of files becomes the final value of the property in the presence of ``multiple`` attribute. At the same time the result of reading will get into the object of every file as ``readerResult`` property.

### Arguments
``readAs`` [optional] (string) - the argument value can be "arrayBufer", "binaryString", "dataURL", "text". The value depends on the presence of corresponding methods of the ``FileReader`` prototype.

### Example
```js
this.bindNode('myKey', '.my-file', MK.binders.file('dataURL'));
// ... user changes input content
// choosing my-image.png from file system ...
this.on('change:myKey', function() {
	console.log(this.myKey);
	// -->
	// File
	//	lastModified: 1383404384000
	//	lastModifiedDate: ...
	//	name: "my-image.png"
	//	readerResult: "data:image/png;base64,iVBO..."
	//		- the result of file reading
	//	size: 9378
	//	type: "image/png"
});
```


## ``dropFiles(readAs)``
Returns binder which allows to drop files from a file manager to given element. After ``bindNode`` is called the HTML block gets needed DOM event listeners (eg, "dragover" and "drop"). When user drops files from file manager into the block, the property gets an array of dropped files as its value. As like ``file`` the binder accepts one optional argument called ``readAs`` which says how the files need to be read by ``FileReader``: data URI, Blob... (the result of reading is placed in ``readerResult`` property of every file). If ``readAs`` isn't given, the property gets an array of files which wasn't read.

### Arguments
``readAs`` [optional] (string) - the argument value can be "arrayBufer", "binaryString", "dataURL", "text". The value depends on the presence of corresponding methods of the ``FileReader`` prototype.

### Example
```js
this.bindNode('myKey', '.drop-area', MK.binders.dropFiles('dataURL'));
// ... user drops one file called
// "my-image.png" into .drop-area block
this.on('change:myKey', function() {
	console.log(this.myKey[0]);
	// -->
	// File
	//	lastModified: 1383404384000
	//	lastModifiedDate: ...
	//	name: "my-image.png"
	//	readerResult: "data:image/png;base64,iVBO..."
	//		- the result of file reading
	//	size: 9378
	//	type: "image/png"
});
```

## ``dragOver()``
Makes given property equal to true when something is dragged over given node.

### Arguments
none

### Examples
```js
this.bindNode('myKey', '.my-node', MK.binders.dragOver());
this.on('change:myKey', function() {
	if(this.myKey) {
		console.log('something is dragging over .my-node');
	} else {
		console.log('nothing is dragged over the node');
	}
});
```
Add dragovered class name when file (or another draggable object) is dragged over .my-node

```js
this.bindNode('myKey', '.my-node', MK.binders.dragOver());
this.bindNode('myKey', '.my-node', MK.binders.className('dragovered'));
```
