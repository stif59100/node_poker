#!/bin/bash
echo "password=" $1
echo "database="$2
service mysql status
mysql -h"localhost" -u root --password="$MYSQL_ROOT_PASSWORD" poker < /etc/mysql/token.sql 
#mysql -h"localhost" -u root -p"$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE" < /app/data.sql

# mysql -h"localhost"  --user root --password="$1" $2 < /etc/mysql/token.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/round.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/round_player.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/rights.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/rights_users.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/level.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/level_round.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/championship.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/championship_round.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/foreign_key.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/unique.sql 
# mysql --user root --password=$1 $2 < /etc/mysql/Insert_Data.sql 