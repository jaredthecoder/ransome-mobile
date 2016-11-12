cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.telerik.plugins.healthkit.HealthKit",
        "file": "plugins/com.telerik.plugins.healthkit/www/HealthKit.js",
        "pluginId": "com.telerik.plugins.healthkit",
        "clobbers": [
            "window.plugins.healthkit"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "com.telerik.plugins.healthkit": "0.5.1"
};
// BOTTOM OF METADATA
});