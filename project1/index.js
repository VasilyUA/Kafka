import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  {
    topic: "test",
  }
);

function message() {
  const event = { category: "CAT", noise: "asdfasdf" };
  const successful = stream.write(eventType.toBuffer(event));
  if (successful) console.log("successful");
  else console.log("Errr");
}

setInterval(() => {
  message();
}, 3000);
