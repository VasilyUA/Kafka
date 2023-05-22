import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

const TOPIC_NAME = "news";

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  {
    topic: TOPIC_NAME,
  }
);

function message() {
  const event = { category: "CAT", noise: "My test1 message!" };
  const successful = stream.write(eventType.toBuffer(event));
  if (successful) console.log("successful");
  else console.log("Error");
}

setInterval(() => {
  message();
}, 3000);
