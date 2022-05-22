dstemp.sensorError(function (errorMessage, errorCode, port) {
    serial.writeString("\n");
    serial.writeString(errorMessage);
    serial.writeString(" code=");
    serial.writeNumber(errorCode);
    serial.writeString(" port=");
    serial.writeNumber(port);
    serial.writeString("\n");
})

