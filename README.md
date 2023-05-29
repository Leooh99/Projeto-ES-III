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
## Criação da movimentção dos card's
![image](https://github.com/mayconbr/engenhariaIII/assets/65423721/6a238762-85b5-4156-8105-e741667014a7)
## Edição do card
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

### Excluir Card
* nome da board, mensagens,[comando]
* Arquivo: Card

# Identificação e Classificação das Funcionalidades

| Descrição  | Tipo | TD | AR/TR | Complexidade |
|-----------:|:----:|:--:|:-----:|:------------:|
| Pessoa     | AIE  |    |       | BAIXA        |
| Login      | SE   |    |       | BAIXA        |
| Criar B.   | EE   |    |       | BAIXA        |
| Excluir B. | CE   |    |       | BAIXA        |             
| Criar C.   | EE   |    |       | MÉDIA        |
| Mover C.   | CE   |    |       | MÉDIA        |
| Excluir C. | CE   |    |       | BAIXA        |

# Classes de dominio

| Nome da Classe | Descrição                                                           | História                                                                                                          |
|---------------:|:--------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------:|
| Criar board    |Criação da board que acomoda os cards que são tarefas respectivamente|Eu como programador gostaria de criar boards personalizados, para facilitar a organização das minhas tarefas.      |
| Excluir board  |                                                                     |                                                                                                                   |
| Criar Card     |Criação do card de uma tarefa sobre respectivo programador           |Para facilitar melhorar minha produtividade como programador gostaria de poder criar cards pra me organizar melhor.|
| Mover Card     |Movimentação dos cards entre as boards para alterar o status do card |Para melhorar o requisito de edição gostaria de movimentar os cards pela board.                                    |            
| Excluir Card   |                                                                     |                                                                                                                   |
