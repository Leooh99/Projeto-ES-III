# Projeto-ES-III-To-Do-List
[![hello-world-app-ci](https://github.com/Leooh99/Projeto-ES-III/actions/workflows/ci.yml/badge.svg)](https://github.com/Leooh99/Projeto-ES-III/actions/workflows/ci.yml)

## O que é 
To do list é um sistema web que auxilia na organização ou gerenciamento de tarefas em forma de boards e cards, onde é possivel visualizar as tarefas que serão, estão ou foram realizadas dentro de uma sequencia.

## Pré requisitos
É necessario um navegador atualizado, alguns exemplos são:
* Chrome
* Safari
* Edge
* Firefox

## Construido com 
O To do List foi desenvolvido utlizando duas principais tecnologias, o React e Node.js que são frameworks baseados em javascript

## Sobre
O projeto foi elaborado durante as aulas de Egenharia de Software na PUC Minas, no curso de Ciência da Computação ministradas pelo professor Luiz Alberto Ferreira Gomes.

#### Alunos:
* Carlos Walace Cordeiro Rodrigues
* Denis José de Souza e Silva
* Leonardo Andrade Heldt
* Maycon Brandão Bruzolato
* Pedro Henrique Ronchini

# Wiframes baseados nas historias
[Figma - Wireframes Completo](https://www.figma.com/file/rGY6m3p8qBt9tBS18eAw1G/Kanban?type=design&node-id=0%3A1&t=ZBBhgjPlBXtyDx8k-1)
## Autenticação do autor
![image](https://github.com/mayconbr/engenhariaIII/assets/65423721/de5b8546-1f25-4ec8-b81b-83cfd518697c)
## Criação do board
![image](https://github.com/mayconbr/engenhariaIII/assets/65423721/62e34879-51e0-4bc6-a1c9-8ca24d4ea48e)
## Criação do card
![image](https://github.com/mayconbr/engenhariaIII/assets/65423721/f7e54bc2-775f-40b7-88b3-52debba90974)
## Edição do card
![image](https://github.com/mayconbr/engenhariaIII/assets/65423721/6a238762-85b5-4156-8105-e741667014a7)
## Movimentação card
![image](https://github.com/mayconbr/engenhariaIII/assets/65423721/0d24fddf-0a10-44c3-b3fd-3fbbd500dc23)


# Analise de pontos de função
Consiste no meio para medição do tamanho de software em termos da visão do usuário final, para esse calculo é necessário os estudos de caso, diagrama de Classes e os relacionamentos.

# Estudo de casos: campos e arquivos
### Login 
* email, senha, [comando]
* Arquivo: Pessoa

### Criar board
* nome da board, mensagens, [comando]
* Arquivo: Board

### Excluir board
* nome da board, mensagens, [comando]
* Arquivo: Board

### Criar Card
* titulo card, nome da board, cor, data,[comando]   
* Arquivo: Card

### Mover Card
* nome da board, nome da outra board, [comando]
* Arquivo: Card

### Editar Card
* nome do card,[comando]
* Arquivo: Card

# Identificação e classificação das funcionalidades

| Descrição  | Tipo | TD  | AR/TR | Complexidade |
|:----------:|:----:|:---:|:-----:|:------------:|
| Pessoa     | AIE  |  4  |   1    | BAIXA - 5   |
| Login      | SE   |  3  |   1    | BAIXA - 4   |
| Criar B.   | ALI  |  3  |   1    | BAIXA - 7   |
| Excluir B. | EE   |  3  |   1    | BAIXA - 3   |             
| Criar C.   | ALI  |  5  |   1    | MÉDIA - 7   |
| Mover C.   | EE   |  3  |   1    | MÉDIA - 3   |
| Editar C.  | EE   |  2  |   1    | BAIXA - 3   |

|Função/ Arquivo | Complexidade | Ocorrências | Peso  | Resultado |
|:--------------:|:------------:|:-----------:|:-----:|:---------:|
| EE             | Baixa        |      3      |   3   |     9     |
| SE             | Baixa        |      1      |   4   |     4     |
| ALI            | Baixa        |      2      |   7   |    14     |
| AIE            | Baixa        |      1      |   5   |     5     |
### Total                                                  32     

# Classes de dominio

| Nome da Classe | Descrição                                                           | História                                                                                                                    |
|:--------------:|:-------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
| Criar board    |Criação da board que acomoda os cards que são tarefas respectivamente|Eu como programador gostaria de criar boards personalizados, para facilitar a organização das minhas tarefas.                |
| Excluir board  |Excluir uma board, que é onde as tarefas são anexadas                |Eu como Gerente, gostaria de ter uma categoria associada a cada card, editar e apagar.                                       |
| Criar Card     |Criação do card de uma tarefa sobre respectivo programador           |Para facilitar melhorar minha produtividade como programador gostaria de poder criar cards pra me organizar melhor.          |
| Mover Card     |Movimentação dos cards entre as boards para alterar o status do card |Para melhorar o requisito de edição gostaria de movimentar os cards pela board.                                              |      
| Editar Card    |Exclusão de um card colocado por acidente ou que não seja mais ne... |Afim de otimizar a minha organização gostaria de poder editar os cards, que facilitaria muito minha vida como um programador.|

# Testes de equivalência

| Wiframe                           |
|:---------------------------------:|
| Autenticação do autor             |
| Criação do board                  |
| Criação do card                   |
| Criação da movimentação dos card's|           
| Edição do card                    |

/////////////////////////////

## Roteiro para etapa Autenticação do autor

Campo testado (E-MAIL)
| Caso de Teste |       Entrada       |   Saída Esperada  |
|---------------|---------------------|-------------------|
|       C1      |     E-mail válido   |     Autenticado   |
|       C2      |    E-mail inválido  |   E-mail inválido |
|       C3      |     E-mail vazio    |   E-mail inválido |

Campo testado (SENHA)
| Caso de Teste |       Entrada       |   Saída Esperada |
|---------------|---------------------|------------------|
|       C1      |     Senha válida    |    Autenticado   |
|       C2      |    Senha inválida   |   Senha inválida |
|       C3      |     Senha vazia     |   Senha inválida |


## Roteiro para etapa Criação do board

Campo testado (NOME)
| Caso de Teste |       Entrada       |        Saída Esperada          |
|---------------|---------------------|-------------------------------|
|       C1      |    Nome da board    |         Board criada           |
|       C2      |     Nome vazio      |  Insira um nome para a board  |


## Roteiro para etapa criação do card

Campo testado (TÍTULO DO CARD)
| Caso de Teste |       Entrada       |         Saída Esperada            |
|---------------|---------------------|----------------------------------|
|       C1      |     Nome do card    |          Cria card                |
|       C2      |      Nome Vazio     |   É necessário indicar um título  |


## Roteiro para a movimentação dos cards

Campo testado (PEGA O CARD)
| Caso de Teste |             Entrada             |     Saída Esperada         |
|---------------|-------------------------------|---------------------------|
|       C1      |     Joga card em outra board    |     Movimenta card         |
|       C2      |     Joga card na mesma board    |    Não movimenta o card    |


## Roteiro para etapa edição do card

Campo testado (TÍTULO)
| Caso de Teste |       Entrada      |            Saída Esperada               |
|---------------|---------------------|----------------------------------------|
|      C1       |     Título muda    |             Card editado                |
|      C2       |     Título vazio   |   É necessário indicar um novo título   |


Campo testado (DESCRIÇÃO)
| Caso de Teste |       Entrada        |               Saída Esperada                |
|---------------|---------------------|---------------------------------------------|
|       C1      |    Descrição muda    |                Card editado                 |
|       C2      |    Descrição vazia   |   É necessário indicar uma nova descrição   |


Campo testado (DATA)
| Caso de Teste |             Entrada           |     Saída Esperada          |
|---------------|-------------------------------|----------------------------|
|      C1       |            Data muda          |      Card editado           |
|      C2       |      Data menor que a atual   |  Digite uma data válida    |


Campo testado (LABELS)
| Caso de Teste |       Entrada       |   Saída Esperada   |
|---------------|---------------------|-------------------|
|      C1       |      Label muda     |    Card editado    |
|      C2       |     Label não muda  |    Card editado    |


Campo testado (TASKS)
| Caso de Teste |       Entrada         |             Saída Esperada                |
|---------------|-----------------------|------------------------------------------|
|      C1       |      Task muda        |              Card editado                 |
|      C2       |     Task não muda     |   É necessário indicar uma nova task      |


