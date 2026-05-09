require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");

/**
 * Transcribes an audio file using Google Gemini API.
 * 
 * @param {string} audioFilePath - Path to the audio file (e.g., .mp3, .wav)
 * @returns {Promise<string>} - Transcribed text
 */
async function transcribeAudio(audioFilePath) {
    const apiKey = process.env.GEMINI_KEY;
    
    if (!apiKey) {
        throw new Error("GEMINI_KEY is not defined in the environment variables. Please check your .env file.");
    }

    if (!fs.existsSync(audioFilePath)) {
        throw new Error(`Audio file not found at: ${audioFilePath}`);
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const fileManager = new GoogleAIFileManager(apiKey);

        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });


        const mimeType = getMimeType(audioFilePath);
        console.log(`Uploading file: ${path.basename(audioFilePath)} (${mimeType})...`);

        const uploadResult = await fileManager.uploadFile(audioFilePath, {
            mimeType: mimeType,
            displayName: path.basename(audioFilePath),
        });

        const file = uploadResult.file;
        console.log(`File uploaded successfully. URI: ${file.uri}`);

        console.log("Generating transcription...");
        const prompt = "Please transcribe this audio file accurately. Return only the transcription text.";
        
        const result = await model.generateContent([
            {
                fileData: {
                    mimeType: file.mimeType,
                    fileUri: file.uri
                }
            },
            { text: prompt },
        ]);



        const response = await result.response;
        const text = response.text();
        
        return text;
    } catch (error) {
        console.error("Transcription error details:", error.message);
        throw new Error(`Failed to transcribe audio: ${error.message}`);
    }
}

/**
 * Helper to determine mime type from file extension.
 * Supports common audio formats.
 */
function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase().replace('.', '');
    const mimeTypes = {
        'mp3': 'audio/mpeg',
        'wav': 'audio/wav',
        'ogg': 'audio/ogg',
        'm4a': 'audio/mp4',
        'aac': 'audio/aac',
        'flac': 'audio/flac'
    };
    return mimeTypes[ext] || 'audio/mpeg';
}

module.exports = { transcribeAudio };

if (require.main === module) {
    const testAudio = process.argv[2];
    if (!testAudio) {
        console.log("Usage: node src/fs-gemini.js <path-to-audio-file>");
    } else {
        transcribeAudio(testAudio)
            .then(transcription => {
                console.log("\n--- Transcription Result ---");
                console.log(transcription);
                console.log("----------------------------\n");
            })
            .catch(err => console.error("Test failed:", err.message));
    }
}

