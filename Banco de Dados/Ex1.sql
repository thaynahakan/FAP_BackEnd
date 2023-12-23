CREATE DATABASE exercicio_db; USE exercicio_db; CREATE TABLE IF NOT EXISTS db_livro ( id_livro INT AUTO_INCREMENT PRIMARY KEY, autor_livro VARCHAR(50) NOT NULL, nome_livro VARCHAR(100) NOT NULL, publi_livro DATE NOT NULL );

SHOW TABLES;

CREATE TABLE IF NOT EXISTS db_autor ( id_autor INT AUTO_INCREMENT PRIMARY KEY, nome_autor VARCHAR(50) NOT NULL, pais_autor VARCHAR(100) NOT NULL, nascim_autor DATE NOT NULL );

CREATE TABLE IF NOT EXISTS db_usuario ( id_usuario INT AUTO_INCREMENT PRIMARY KEY, nome_usuario VARCHAR(50) NOT NULL, cpf_usuario INT NOT NULL, tel_usuario INT NOT NULL );

CREATE TABLE IF NOT EXISTS db_emprestimo ( id_emprestimo INT AUTO_INCREMENT PRIMARY KEY, quant_livro INT NOT NULL, id_livro INT NOT NULL, data_emprestimo DATE NOT NULL );

CREATE TABLE IF NOT EXISTS db_devolucao ( id_devolucao INT AUTO_INCREMENT PRIMARY KEY, data_devolucao DATE NOT NULL, id_livro INT NOT NULL, id_usuario INT NOT NULL );