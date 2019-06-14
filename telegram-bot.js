process.env["NTBA_FIX_319"] = 1;
process.env["NTBA_FIX_350"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const splitFileStream = require("split-file-stream");
const stream = require("stream");
const mergeStream = require('merge-stream');

const token = '839691353:AAHhOfKSMBV5iMTBU5VdRtOxkvGBwSFQ2e8';
const bot = new TelegramBot(token, {polling: true});

const fileName = '1.png';

const filesPath = '/files';
const inFilePath = __dirname + filesPath + '/test_files/' + fileName;
const outFilePath = __dirname + filesPath + '/out/' + fileName;
const splitFilesPath = __dirname + filesPath + '/split/' + fileName;
const downloadFolder = __dirname + filesPath + '/download';
const mergeFilePath = __dirname + filesPath + '/merge/' + fileName;
const readStream1 = fs.createReadStream(inFilePath, {start: 0, end: 200});

const readStream2 = fs.createReadStream(inFilePath, {start: 201, end: 400});
const readStream3 = fs.createReadStream(inFilePath, {start: 401});
const merge = mergeStream();

const writeStream = fs.createWriteStream(outFilePath);

// merge.pipe(writeStream);


const partitionStreamSize = 10000000;
const countUploadStreams = 5;
const countDownloadStremas = 5;

console.log(fs.statSync(inFilePath));

function sendFile(chatId, filePath) {

}

bot.sendDocument('362740906', path,);

// splitFileStream.split(readStream, partitionStreamSize, splitFilesPath, (paths) => {
//     const sendDocumentPromises = [];
//     const downloadFilePromises = [];
//     paths.forEach(path => {
//         sendDocumentPromises.push(
//
//         )
//     });
//     Promise.all(sendDocumentPromises).then((answers => {
//         answers.forEach(answer => {
//             downloadFilePromises.push(
//                 bot.downloadFile(answer.document.file_id, downloadFolder)
//             )
//         });
//         Promise.all(downloadFilePromises).then((dFilesPaths) => {
//             console.log('Download files', dFilesPaths, 'success');
//             splitFileStream.mergeFilesToDisk(dFilesPaths, mergeFilePath, () => {
//                 console.log('Merge files to file success');
//
//             })
//         })
//     }))
// });

// process.exit();
