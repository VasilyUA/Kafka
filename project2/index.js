import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

const consumer = new Kafka.KafkaConsumer(
  {
    "group.id": "kafka1", // для розділення сервісів я кщо вказати дну групу то буде балансуватись навантаження
    "metadata.broker.list": "localhost:9092",
  },
  {}
);

consumer.connect();

consumer
  .on("ready", () => {
    console.log("consumer ready..");
    consumer.subscribe(["test"]);
    consumer.consume();
  })
  .on("data", function (data) {
    // console.log(JSON.stringify(data));
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
  });
