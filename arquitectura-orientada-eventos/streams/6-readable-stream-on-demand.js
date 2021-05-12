const { Readable } = require('stream');
const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            // this = readable stream
            if (this.currentCharCode > 90) {    
                // 90 indica la ultima letra del abcdario
                this.push(null);
                return;
            }

            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);
    }
});

readableStream.currentCharCode = 65;    // 65 = 'a'
readableStream.pipe(process.stdout);