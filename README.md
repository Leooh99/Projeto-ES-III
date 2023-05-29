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

| Descrição  | Tipo | TD | AR/TR | Complexidade |
|:----------:|:----:|:--:|:-----:|:------------:|
| Pessoa     | AIE  |    |       | BAIXA        |
| Login      | SE   |    |       | BAIXA        |
| Criar B.   | EE   |    |       | BAIXA        |
| Excluir B. | CE   |    |       | BAIXA        |             
| Criar C.   | EE   |    |       | MÉDIA        |
| Mover C.   | CE   |    |       | MÉDIA        |
| Editar C.  | CE   |    |       | BAIXA        |

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

### Autenticação do autor
* Entrada: email cadastrado |Senha: correta   -> Autenticado
* Entrada: email cadastrado |Senha: incorreta -> Negado
* Entrada: email n cadas... |Senha: n existe  -> Negado

### Criação do board 
* Entrada: Nome board |Clica criar -> Cria board
* Entrada: Nome board |Clica X     -> Não cria board
* Entrada: Vazio      |Clica X     -> Não cria board
* Entrada: Vazio      |Clica criar -> Não cria board

### Criação do card 
* Entrada: Nome card|Clica criar -> Cria card
* Entrada: Vazio    |Clica criar -> Não cria card
* Entrada: Vazio    |Clica no X  -> Não cria card
* Entrada Nome card |Clica no X  -> Não cria card 

### Criação da movimentação dos card's
* Entrada: Pega card  | Joga card em outra board -> Movimenta card
* Entrada: Pega card  | Não movimenta o card     -> Não movimenta o card
* Entrada: N pega card| Movimenta                -> Não movimenta o card
* Entrada: Pega card  | Joga card na mesma board -> Não moviemnta o card

### Edição do card
* Entrada: titulo muda  | muda   descrição | muda label | muda task | salvar -> Card editado
* Entrada: titulo N muda| muda   descrição | muda label | muda task | salvar -> Card editado
* Entrada: titulo N muda| muda N descrição | muda label | muda task | salvar -> Card editado
* Entrada: .....
* Entrada: ..... 
* Entrada: .....
* Tudo edita um card, se for clicado em salvar.
