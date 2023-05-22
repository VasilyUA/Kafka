import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

const TOPIC_NAME = "news";

const consumer = new Kafka.KafkaConsumer(
  {
    "group.id": "kafka2", // для розділення сервісів я кщо вказати різні групи то буде балансуватись навантаження
    "metadata.broker.list": "localhost:9092",
  },
  {}
);

consumer.connect();

consumer
  .on("ready", () => {
    console.log("consumer ready..");
    consumer.subscribe([TOPIC_NAME]);
    consumer.consume();
  })
  .on("data", function (data) {
    // console.log(JSON.stringify(data));
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
  });
