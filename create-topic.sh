#!/bin/bash

echo "Creating topic test"

docker exec -it kafka bash -c "/opt/bitnami/kafka/bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 2 --topic test"
