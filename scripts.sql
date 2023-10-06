create database chamadadb;
use chamadadb;


create table tb_produto (
	id_produto          int primary key auto_increment,
	nm_produto          varchar(200),
    ds_marca			varchar(200),
    ds_categoria		varchar(200),
	vl_valor            decimal(5,2),
    ds_modelo       	 varchar(200)
);


select
	id_produto		as id,
    nm_produto      as produto,
    ds_marca        as marca,
    ds_categoria    as categoria,
    vl_valor        as valor,
    ds_modelo       as modelo
from tb_produto;
    
drop table tb_produto;

delete from tb_produto WHERE id_produto = 1;

update tb_produto
            set nm_produto = 'aaa',
            ds_marca = 'aa',
            ds_categora = 'aa',
            vl_valor = 2,
            ds_modelo = 'aa'
            where id_produto = 3;