// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

import { Config } from "karma";


module.exports = (config: Config) => {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "@angular-devkit/build-angular"],
        plugins: [
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-jasmine-html-reporter"),
            require("karma-coverage"),
            require("@angular-devkit/build-angular/plugins/karma"),
        ],
        client: {
            jasmine: {},
            clearContext: false,
        },
        jasmineHtmlReporter: {
            suppressAll: true, // Suppress all messages (overrides other suppress settings)
            suppressFailed: true // Suppress failed messages
        },
        coverageReporter: {
            dir: require("path").join(__dirname, "./coverage"),
            subdir: ".",
            reporters: [{ type: "html" }, { type: "text-summary" }],
        },
        reporters: ["kjhtml"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["ChromeHeadless"],
        singleRun: false,
        restartOnFileChange: true,
    });
};