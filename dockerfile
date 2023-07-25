From mysql:latest

ENV MYSQL_ROOT_PASSWORD=MYSQL_ROOT_PASSWORD
copy ./sql/scripts_sql/* /docker-entrypoint-initdb.d/