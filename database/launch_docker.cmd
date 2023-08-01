 docker build -t databasepoker .
 docker run -dp 127.0.0.1:3306:3306 --name databasepoker poker