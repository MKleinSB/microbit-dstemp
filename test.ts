serial.writeLine("starting...")
serial.writeLine("Press A to show temperature")
serial.writeLine("If sensor is connected it should show the temperature")
serial.writeLine("If sensor is NOT connected it should show -Infinity (for temp) and an error message")

dstemp.sensorError(function (errorMessage, errorCode, port) {
    serial.writeString("\n");
    serial.writeString(errorMessage);
    serial.writeString(" code=");
    serial.writeNumber(errorCode);
    serial.writeString(" port=");
    serial.writeNumber(port);
    serial.writeString("\n");
})

