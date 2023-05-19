#!/bin/bash

echo "Topic test:"

docker exec -it kafka bash -c "/opt/bitnami/kafka/bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3 --topic test"

# docker exec -it kafka bash -c "/opt/bitnami/kafka/bin/kafka-topics.sh --alter --bootstrap-server localhost:9092 --topic test --partitions 3" # change partitions to > 2    

# docker exec -it kafka bash -c "/opt/bitnami/kafka/bin/kafka-topics.sh --delete --bootstrap-server localhost:9092 --topic test" # delete topic   
