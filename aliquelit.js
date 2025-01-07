function getConfigValue() {
    // Some logic to determine the config value
    return Math.random() > 0.5; // For example, randomly returns true or false
}

if (getConfigValue()) {
    console.log("Config value is true!");
} else {
    console.log("Config value is false!");
}
