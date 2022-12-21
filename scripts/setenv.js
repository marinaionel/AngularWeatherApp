const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   weatherApiBaseUrl: "${process.env.WEATHER_API_BASE_URL}",
   weatherApiKey: "${process.env.WEATHER_API_KEY}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
    if (err) console.log(err);
    console.log(`Wrote variables to ${targetPath}`);
})