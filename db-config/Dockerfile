FROM mysql/mysql-server:8.0

ENV MYSQL_ROOT_PASSWORD=sdcmysql
ENV MYSQL_DATABASE=staging
ENV MYSQL_USER=sdc_user
ENV MYSQL_PASSWORD=sdcmysql



ADD staging.sql /docker-entrypoint-initdb.d