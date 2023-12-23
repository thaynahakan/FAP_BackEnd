-- Inserindo três novos produtos
INSERT INTO Produtos (NomeProduto, Preco, QuantidadeEmEstoque)
VALUES
    ('Smartphone', 799.99, 20),
    ('Tablet', 349.99, 10),
    ('Fone de Ouvido', 49.99, 50);

-- Atualizando estoque e preço do Smartphone
UPDATE Produtos
SET QuantidadeEmEstoque = 25, Preco = 849.99
WHERE NomeProduto = 'Smartphone';

-- Simulando venda de cinco unidades do Tablet
UPDATE Produtos
SET QuantidadeEmEstoque = QuantidadeEmEstoque - 5
WHERE NomeProduto = 'Tablet';

-- Simulando venda de dez unidades do Fone de Ouvido
UPDATE Produtos
SET QuantidadeEmEstoque = QuantidadeEmEstoque - 10
WHERE NomeProduto = 'Fone de Ouvido';