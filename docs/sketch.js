let serial;
let latestData = "waiting for data";

function setup() {
  createCanvas(400, 400);
  background(220);

  serial = new p5.SerialPort();

  serial.list();
  serial.open('/dev/tty.usbmodem'); // change to your port

  serial.on('data', gotData);
}

function draw() {
  background(220);

  textSize(20);
  textAlign(CENTER);

  text("Arduino Data:", width/2, 150);
  text(latestData, width/2, 200);
}

function gotData() {
  let currentString = serial.readLine();

  if (!currentString) return;

  latestData = currentString;
}