# Projeto do time L(e||a)gados

A equipe do grupo 3 após ponderar sobre os temas apresentados no Hackathon optou em propor soluções para as dores do Ensino de Programação, principalmente no que tange a dificuldade de novos alunos sem back-ground em tecnologia em aprender e se manter no curso.

<img src="https://github.com/GMODias/frontend-legados-hackathon-project/blob/main/Captura_de_tela_de_2021-12-14_01-48-40-ANIMATION.gif" alt="frontend-legados-hackathon" />

## Avaliação Inicial do Problema

Ao analisarmos o problema em questão, discutiu-se principalmente os seguintes pontos:
+ Didática: Cada pessoa é um individuo, e cada um aprende de uma maneira e em um tempo diferente.
+ "Calor humano": Para pessoas recém chegadas muitas vezes a necessidade de um approach mais perto de alguém com mais conhecimento e disponibilidade de ensinar, ainda mais quando os primeiros passos são instalar e aprender Linux, Bash, utilizar IDE's e o GIT.

## Soluções apresentadas

+ Para o ponto de didática foram pensadas as 2 soluções abaixo:
  - Criar no ambiente de ensino mais de uma forma do material didático ser apresentado. A ideia aqui foi manter a forma atual, mas também possibilitar uma "trilha" de aprendizado para os alunos, onde os mesmo seguiriam com um "assistente virtual", quase como a Cortana, Siri, etc, que indicaria os caminhos / ações para o aluno ir progredindo na matéria, quase que executando um passo a passo ao vivo como muitos tutoriais, mas que só evolui após o usuário executar o passo. A ideia é inclusive criar novas trilhas se mostrem viáveis com o tempo.
  - Criar fora do Slack, um painel simplificado onde descrições e links de materiais didáticos sejam apresentados e exista a possibilidade do usuários marcarem se o material é bom mas avançado ou se é bom e para iniciante ("noob"), gerando um ranking com histórico de material que ajude tanto estudantes iniciantes como avançados, e possuindo o feed-back principal dos estudantes. Essa solução tem o objetivo de simplificar o slack e de mitigar a separação de canais de turma como registro de informações.
 
 + Para o ponto "calor humano", analisou-se que existem muitos alunos bons na Trybe, ainda mais com o número crescente de seus estudantes, sendo imaginado uma forma de tentar juntar os alunos que tem duvidas com os alunos que querem ajudar / mentorear outros, independente da turma que eles sejam. Existem muitos alunos que ajudam os outros e essa ajuda não aparece e alunos que tem duvidas e muitas vezes não tentam saná-las com outras pessoas, por isso foi esboçado um sistema com calendário onde os alunos marcam os horários onde têm duvidas de uma matéria especifica, outros alunos marcam horários que podem ensinar matérias que "dominam", e assim é feito um match entre eles, quase que um Tinder misturado com Calendly (agradecimentos ao Gustavo Nunes pela comparação). Foram pensadas muitas regras de negócio como avaliação dos alunos e mentores após uma meeting (soft-skills, hard-skill, se a duvida foi sanada, estrelas semelhante ao uber, etc), a opção de um aluno e /ou mentor poder tirar duvidas ou ensinar com acessibilidade (línguá de sinais), emissão de certificados de acordo com o tempo de mentoria valorizando e dando visibilidade aos estudantes que ajudam os outros (mitigando um pouco o é preciso ser visto para ser lembrado), etc. 
PS.: é importante reforçar que a regra de negócio necessita ser muito bem alinhada e a equipe acredita que os alunos com maiores pontuações devem ser direcionados para solucionar problemas de estudantes iniciantes, principalmente por conta do cuidado que se deve ter.

## O que foi possível implementar das ideias?

Não estava muito claro para a equipe o que devia ser o produto final a ser apresentado. Inicialmente pensamos muito em todo o potencial e o que queríamos chegar com o produto, tentando estruturar um back-end "parrudo" e com as regras de negócios boas, mas de implementação muito complicada, principalmente com o tempo que tínhamos.

No último dia de projeto do Hackathon, os monitores (Gustavo e Liipe) indicaram o melhor caminho a seguir como entrega e sendo assim focamos no Front-End da aplicação, e com o tempo restante infelizmente não foi possível elaborar os testes.

Foi utilizado o React com Redux e Hooks para o desenvolvimento do Front-End e no Back-End (repositório https://github.com/0xguidev/legados-backend) foi utilizado o NodeJs com o Express para pontos de login e cadastro de usuários.

## E agora? Para onde vamos? (dormir daqui a pouco pois já é 2hrs da matina...)

A experiencia foi muito produtiva, e a equipe pensa em a partir de agora utilizar o tempo livre para evoluir no desenvolvimento da aplicação, sendo estes os primeiros a utilizarem-na, não só para tirar duvidas, mas para marcar horário para beber, codar, evoluir a ideia e quem sabe um dia ter um produto 100% funcional no mercado com o nosso nome e nossa cara.


Para você que chegou até aqui, muito Obrigado pela atenção!!! 
Equipe L(e||a)gados - Grupo 3 - Alex Smith, Guilherme de Paula , Guilherme Dias e Marlon Ramos.

PS.: Para as futuras implementações já estão sendo pensados inúmeros Easter-Eggs!!!
