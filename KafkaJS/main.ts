import kafkajs from "kafkajs";

const kafka = new kafkajs.Kafka({
  clientId: "my-app",
  brokers: ["sweet-urchin-14797-eu2-kafka.upstash.io:9092"],
  sasl: {
    mechanism: "scram-sha-256",
    username: "c3dlZXQtdXJjaGluLTE0Nzk3JASQg3JVWKqHXekIjHMsL88BxytsCX3Kv1AjlKo",
    password: "MTExZGU2ZGItNzQxZC00ZjdjLTlkOTgtMmRmNDFmZmNjODBk",
  },
  ssl: true,
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "Main" });

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: "Main",
    messages: [{ value: "Hello KafkaJS user!" }],
  });

  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "Main", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message?.value?.toString(),
      });
    },
  });
};

run().catch(console.error);
