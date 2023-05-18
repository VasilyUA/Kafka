#!/bin/bash

echo "Creating topic test"

docker exec -it b2b0dcb987c9 bash -c "/opt/bitnami/kafka/bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test"
