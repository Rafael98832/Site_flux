# 📋 Como Adicionar Novos Produtos

Este guia explica como adicionar novos ar-condicionados ao site de forma simples e rápida.

## 📍 Onde Adicionar

O arquivo com todos os produtos fica em: `public/products.json`

## 🔧 Como Adicionar um Novo Produto

### 1. Abra o arquivo `products.json`
- Navegue até a pasta `public`
- Abra o arquivo `products.json`

### 2. Encontre a seção "products"
Procure por esta linha no início do arquivo:
```json
"products": [
```

### 3. Adicione o novo produto
**IMPORTANTE:** Adicione o novo produto **ANTES** do último produto existente.

Copie este modelo e preencha com as informações do seu produto:

```json
{
  "id": 12,
  "name": "Nome do Produto Completo",
  "shortDescription": "Descrição curta e atrativa",
  "image1": "https://link-da-imagem-principal.jpg",
  "image2": "https://link-da-segunda-imagem.jpg",
  "image3": "https://link-da-terceira-imagem.jpg",
  "image4": "https://link-da-quarta-imagem.jpg",
  "description": "Descrição detalhada do produto com todas as características e benefícios.",
  "originalPrice": 3999,
  "price": 3499,
  "pixPrice": 3289.15,
  "inStock": true,
  "category": "Split Inverter",
  "capacity": "12.000 BTUs",
  "type": "Frio",
  "technology": "Inverter",
  "voltage": "220V",
  "energyClass": "A",
  "wifi": true,
  "checkoutLink": "https://link-para-compra.com"
},
```

### 4. Preencha cada campo

#### 📝 Campos Obrigatórios

- **id**: Número único (use o próximo número disponível)
- **name**: Nome completo do produto
- **shortDescription**: Descrição de 1 linha para o card
- **description**: Descrição completa para a página do produto
- **originalPrice**: Preço original (sem desconto)
- **price**: Preço com desconto
- **pixPrice**: Preço no PIX (15% de desconto sobre o price)
- **category**: Categoria do produto
- **capacity**: Capacidade em BTUs
- **type**: Tipo do ciclo
- **technology**: Tecnologia utilizada
- **voltage**: Voltagem
- **energyClass**: Classe energética
- **inStock**: Se está em estoque
- **wifi**: Se tem Wi-Fi

#### 🖼️ Imagens (image1, image2, image3, image4)
- Use links diretos para imagens (URLs que terminam em .jpg, .png, .webp)
- **image1** é a imagem principal (obrigatória)
- As outras são opcionais, mas recomendadas

#### 🔗 Link de Compra (checkoutLink)
- Link para onde o cliente será direcionado ao clicar "Comprar agora"
- Opcional - se não tiver, aparecerá "Falar com vendedor"

### 5. Valores Permitidos

#### Categorias:
- `"Split Inverter"`
- `"Multi Split"`
- `"Cassete"`
- `"Portátil"`

#### Capacidades:
- `"9.000 BTUs"`
- `"12.000 BTUs"`
- `"18.000 BTUs"`
- `"24.000 BTUs"`
- Para Multi Split: `"21.000 BTUs (9.000 + 12.000)"`

#### Tipos:
- `"Frio"`
- `"Quente/Frio"`

#### Voltagens:
- `"110V"`
- `"220V"`
- `"Bivolt"`

#### Classes Energéticas:
- `"A"` (mais eficiente)
- `"B"`
- `"C"`

#### Verdadeiro/Falso:
- `true` (verdadeiro)
- `false` (falso)

### 6. Exemplo Prático

```json
{
  "id": 12,
  "name": "Ar Condicionado LG Dual Inverter 9.000 BTUs Frio",
  "shortDescription": "Economia de energia e operação silenciosa",
  "image1": "https://exemplo.com/lg-9000-frente.jpg",
  "image2": "https://exemplo.com/lg-9000-lateral.jpg",
  "image3": "https://exemplo.com/lg-9000-controle.jpg",
  "image4": "https://exemplo.com/lg-9000-instalado.jpg",
  "description": "O LG Dual Inverter oferece até 70% de economia de energia com operação ultra silenciosa. Ideal para quartos e salas pequenas.",
  "originalPrice": 2999,
  "price": 2499,
  "pixPrice": 2124.15,
  "inStock": true,
  "category": "Split Inverter",
  "capacity": "9.000 BTUs",
  "type": "Frio",
  "technology": "Dual Inverter",
  "voltage": "220V",
  "energyClass": "A",
  "wifi": true,
  "checkoutLink": "https://loja.com/lg-dual-inverter-9000"
},
```

## ⚠️ Dicas Importantes

1. **Sempre use vírgula (,) no final** de cada produto, exceto o último
2. **Não esqueça das aspas duplas** em textos: `"texto aqui"`
3. **Números não usam aspas**: `2999` ✅ `"2999"` ❌
4. **Verdadeiro/falso não usam aspas**: `true` ✅ `"true"` ❌
5. **IDs devem ser únicos** - não repita números
6. **Teste sempre** após adicionar um produto

## 💰 Como Calcular o Preço PIX

Preço PIX = Preço normal × 0.85 (desconto de 15%)

**Exemplo:**
- Preço normal: R$ 2.499
- Preço PIX: 2499 × 0.85 = 2.124,15

## ✅ Checklist Final

Antes de salvar, verifique:
- [ ] ID único
- [ ] Todos os campos preenchidos
- [ ] Vírgulas no lugar certo
- [ ] Aspas nos textos
- [ ] Links de imagem funcionando
- [ ] Preços calculados corretamente
- [ ] Categoria e valores válidos

## 🆘 Se Algo Der Errado

Se o site parar de funcionar após adicionar um produto:
1. Verifique se não esqueceu vírgulas
2. Confira se todas as aspas estão fechadas
3. Teste o arquivo em um validador JSON online
4. Desfaça a última alteração e tente novamente

---

**💡 Dica:** Sempre faça uma cópia de backup do arquivo antes de editá-lo!
