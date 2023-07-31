From mysql:latest

ENV MYSQL_ROOT_PASSWORD=MYSQL_ROOT_PASSWORD
ENV MYSQL_DATABASE=poker
ENV MYSQL_USER=poker
ENV MYSQL_PASSWORD=poker

# ADD ./sql/scripts_sql/*.sql  /etc/mysql/
# ADD ./sql/init_db.sh   /etc/mysql/
COPY ./sql/scripts_sql/*.sql /docker-entrypoint-initdb.d

# RUN  /etc/mysql/init_db.sh $MYSQL_ROOT_PASSWORD $MYSQL_DATABASE

EXPOSE 3306