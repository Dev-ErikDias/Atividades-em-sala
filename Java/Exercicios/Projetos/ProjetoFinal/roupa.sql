create database db_roupa;
use db_roupa;

create table tb_roupa(
	id int primary key not null auto_increment,
    tamanho varchar(5) not null,
    modelo varchar(100) not null,
    cor varchar(100) not null,
    marca varchar(100) not null,
    tipo varchar(100) not null,
    preco decimal(10, 2) not null
);
