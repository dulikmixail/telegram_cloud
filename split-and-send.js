const fs = require('fs');

const Spliter = function (chatId, filePath, partitionStreamSize = 20971520, numberStreams = 1) {
    this.numberStreams = numberStreams;
    this.chatId = chatId;
    this.filePath = filePath;
    this.fileStat = fs.statSync(filePath);
    const streams = [];
    let numberFileParts = 0;

    const initStreams = function () {
        const fSize = this.fileStat.size;
        numberFileParts = ((fSize - fSize / partitionStreamSize) / partitionStreamSize) + 1;
        for (let i = 0; i < numberStreams; i++) {
            streams.push(fs.createReadStream(filePath, {start: 0, end: partitionStreamSize}));
        }
    }
};
