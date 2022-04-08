let { join } = require('path');
require("dotenv").config();

/// This is a shorter conf.js file. To see more options, check the wdio.template.conf.js file.
exports.config = {
    runner: 'local',
    port: 4723,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        'tests/features/*.feature'
    ],
    //Testcase collection
    suites: {
        aut: [
            'tests/features/login.feature',
            'tests/features/shopping.feature'
        ]
    },

    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 3,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [
        {
            maxInstances: 1,
            platformName: "Android",
            platformVersion: "8", //change it to your device version
            deviceName: "a87e13a1", //change it to your device udid
            appPackage: "io.flutter.demo.gallery",
            automationName: "UiAutomator2",
            appActivity: "io.flutter.demo.gallery.MainActivity",
            noReset: true,
            fullReset: false,
            autoGrantPermissions: true,
            //"appium:app": join(process.cwd(), application())
        }
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters: ['spec'],

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['tests/step-definitions/*Steps.js' ],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: `${process.env.npm_config_tag || ''}`,
        // <number> timeout for step definitions
        timeout: 180000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: true
    },
    // before: async function (capabilities, specs) {
    //     if (!driver.isAppInstalled(capabilities.appPackage)) {
    //         driver.installApp(capabilities['\'appium:app\''])
    //     }
    // },
    beforeScenario: function (uri, feature, scenario, result, sourceLocation, context) {
        driver.launchApp()
    },
    afterScenario: async function (uri, feature, scenario, result, sourceLocation, context) {
        driver.closeApp()
    },
}