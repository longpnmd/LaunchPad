#!/bin/bash
set -e

echo "Running init-always script..."

# Create or update databases
for db in ${POSTGRES_MULTIPLE_DATABASES//,/ }
do
  echo "Checking database: $db"
  if psql -U "$POSTGRES_USER" -lqt | cut -d \| -f 1 | grep -qw "$db"; then
    echo "Database $db already exists, skipping creation"
  else
    echo "Creating database $db"
    psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" <<-EOSQL
      CREATE DATABASE $db;
      GRANT ALL PRIVILEGES ON DATABASE $db TO $POSTGRES_USER;
EOSQL
  fi
done

echo "Init-always script completed."