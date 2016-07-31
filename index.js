var awsIot = require('aws-iot-device-sdk');

// Load the device configuration, to match AWS IoT device settings
var deviceConfig = require('./config/device.json');
console.log(JSON.stringify(deviceConfig));

// Initialize AWS IoT device
var device = awsIot.device(deviceConfig);
