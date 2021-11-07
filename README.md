# Comandos e conceitos Docker
## Objetivo:
Explicar e demonstrar os comandos e conceitos do Docker.

## Sumário
1. [Conhecimentos prévios](#conhecimentos-prévios)
2. [O que é Docker?](#o-que-é-docker)
3. [Coneitos](#conceitos)
4. [Como se instala?](#como-se-instala)
5. [Comandos](#comandos)
6. [Dockerfile](#dockerfile)
7. [Network Docker](#network-rede-docker)
8. [Conectando containers](#exemplo-conectando-containers)
9. [Otimização utilizando multistage building](#otimização-utilizando-multistage-building)
10. [Exercícios](#exercícios)
11. [Referências](#referências)

# Conhecimentos prévios.
Alguns termos necessários e interessantes para entender melhor a tecnologia Docker.

## O que são daemons?
Daemons (pronúncia: daimôns), em palavras simples, são processos de plano de fundo. Em um senso estritamente técnico, um processo de sistema do tipo Unix é um daemon quando seu processo pai termina e o daemon é atribuído ao processo *init* (processo inicial ou processo número 1) como seu processo pai e não possui terminal de controle. Porém um daemon pode ser qualquer processo de plano de fundo seja um filho do processo *init* ou não.

Em um sistema do tipo Unix, o método comum para que um processo torna-se daemon é quando esse processo é iniciado por linha de comando ou por script de inicialização, como, por exemplo, script *init* ou script *SystemStarter*.

FONTE E MAIS INFORMAÇÕES: [Wikipédia - Daemon (computação)](https://pt.wikipedia.org/wiki/Daemon_(computa%C3%A7%C3%A3o))

## O que são containers Linux?
Um Containers Linux é um conjunto de um ou mais processos organizados isoladamente do sistema. Todos os arquivos necessários para executá-los são fornecidos por uma imagem distinta. Na prática, os containers Linux são portáteis e consistentes durante toda a migração entre os ambientes de desenvolvimento, teste e produção. Essas características os tornam uma opção muito mais rápida do que os *pipelines* de desenvolvimento, que dependem da replicação dos ambientes de teste tradicionais.

[Fonte](https://www.redhat.com/pt-br/topics/containers/whats-a-linux-container)

## O que são pipelines de desenovlvimento?
De modo geral, uma pipeline nada mais é que um conjunto de instruções, steps, scripts ou uma sequência de passos que deverão ser executadas e que representam operações manuais, i.e. instalação de dependencias, build, etc.

[Fonte](https://thihenos.medium.com/o-que-%C3%A9-uma-pipeline-para-desenvolvimento-de-softwares-para-iniciantes-9fc26150178e)

## *Proxy*
*Proxy* é o termo utilizado para definir os intermediários entre o usuário e o servidor. A função da *proxy* é conectar o computar local com a rede externa do servidor, enviando solicitações do endereço local para o servidor e, posteriormente, traduzindo e repassando essa solicitação para o computador local. Todas as requisições feitas ao servidor passarão pelo *proxy*.

Existem outros tipos de *proxy*, como as *Web proxy*, *Open proxy*, Redes *proxy*.

### Web proxy
Existe, ainda, um outro tipo de proxy, os web proxies. Eles são uma versão que esconde o seu IP real e lhe permite navegar anonimamente. Muitos deles são utilizados em redes fechadas como universidades e ambientes de trabalho para burlar uma determinação de bloqueio a alguns sites da internet. Os conteúdos campeões de bloqueio são: sites de relacionamento (Orkut, facebook e outros), programas de troca de mensagem instantânea (Msn Messenger, Yahoo! Messenger e outros), sem contar os tão proibidos sites de pornografia.

### Open proxy
As conexões abertas de proxy  (open proxy) são o tipo mais perigoso e convidativo aos crackers e usuários mal intencionados. Quando um destes usuários consegue acessar um computador, instala um servidor proxy nele para que possa entrar quando quiser na máquina e promover diversos tipos de ilegalidade como scripts que roubam senhas de bancos, fraudes envolvendo cartões de crédito e uma grande variedade de atos ilegais.

### Redes proxy
As redes proxy são baseadas em códigos criptados que permitem a comunicação anônima entre os usuários. Exemplo deste tipo de rede são as conexões P2P (peer to peer) em que um usuário se conecta ao outro sem saber sua identidade e trocam arquivos entre si. Estas redes se caracterizam por não permitirem o controle dos servidores, os usuários comuns é quem providenciam todo o conteúdo e os arquivos. Certamente, muitos destes computadores são usados por pessoas mal intencionadas com segundas intenções. Por isso, deve-se ter em mente que qualquer promessa de privacidade e segurança é mais do que rara.

[Fonte: TecMundo](https://www.tecmundo.com.br/navegador/972-o-que-e-proxy-.htm)

# O que é Docker?
Docker, no que se refere ao software de TI, é uma tecnologia de containerização para criação e uso de container Linux. Com o Docker é possível lidar com os containers como se fossem máquinas virtuais modulares e extremamente leves. Além disso, os containers oferecem maior flexibilidade para você criar, implantar, copiar e migrar um container de um ambiente para outro.

FONTE E MAIS INFORMAÇÕES:[Red Hat - O que é Docker?](https://www.redhat.com/pt-br/topics/containers/what-is-docker)

## Conceitos
Alguns conceitos sobre Docker.

## O que são imagens?
Uma imagem, nesse contexto, é um arquivo que contém outros arquivos e metadados. Os arquivos da imagem estarão disponíveis para serem usados na construção de containers e os metadados serão usados para estabelecer um relacionamento entre as imagens.

FONTE: Docker in Action

## O que são containers?
Um container (ou contêiner) é uma unidade padrão de software que empacota o código e todas as suas dependências para que o aplicativo seja executado de forma rápida e confiável de um ambiente de computação para outro. Em outras palavras, os containers isolam o software de seu ambiente e garantem que ele funcione uniformemente.

Um *container* Docker, construído a partir de uma imagem Docker, é um pacote de software leve, autonômo e executável que inclui tudo o que é necessário para executar um aplicativo: código, tempo de execução, ferramentas do sistema, bibliotecas do sistema e configurações. As imagens se tornam *containers* em tempo de execução e, no caso de *containers* Docker, as imagens se tornam *containers* quando são executadas no Docker Engine.

FONTE E MAIS INFORMAÇÕES: [Use containers to Build, Share and Run your applications](https://www.docker.com/resources/what-container)

## O que são volumes no Docker?
Volumes no Docker são diretórios externos ao *container* que são montados diretamente nele, não seguindo, portanto, o sistema de arquivos do *container*. A principal função do volume é persistir os dados, independentemente do estado do *container*. Visto que o sistema de arquivo do *container* é volátil, ou seja, toda a informação escrita nele é perdida quando o *container* "morre".

FONTE E MAIS INFORMAÇÕES: [Entendendo volumes no Docker](https://www.linuxtips.io/blogs/novidades/entendendo-volumes-no-docker)

## Como se instala?
Antes de prosseguir com as instalações é importante lembrar que Docker foi construído para ser usado nos SO's Linux, para é possível utilizá-lo em outros sistemas.

### Linux
Em breve...

### Windows
O Docker pode ser utilizado no Windows por meio de virtulização. Para isso há três maneiras de se prosseguir.
1. Docker Toolbox
   - Roda com o VirtualBox
   - É lento
2. Docker Desktop
   - Roda com Hyper-V, mas não é a mesma coisa que rodar o Docker em um ambiente Linux
   - Precisa de licença PRO do Windows
   - Exige mais recursos da máquina
   - Desempenho bem superior ao ToolBox
3. WSL 2 (Windows Subsystem for Linux)
   - **A versão 1** permitia o ambiente Linux embarcado dentro do Windows, dando acesso a quase todos os comandos do Linux e permitindo acesso aos drivers C, D, etc. Também permitia a instalação de diversas distribuições Linux (Ubuntu, Debian, etc) e manipulações através do terminal. As desvantagens dessa versão eram que o kernel do Linux estava incompleto; desempenho ruim ao rodar aplicações dentro do Linux; Não tinha suporte ao Docker; Vários problemas de compatibilidade com programas e ferramentas.
   - Em 2020 a Microsoft lança a **versão 2**. Agora com:
     - Execução completa do kernel do Linux;
     - Manipulação através do terminal;
     - Grande desempenho ao executar aplicativos dentro do Linux. Ambiente fora do `mnt/c/`;
     - Suporte ao Docker e Kubernetes;
     - Usa o Virtual Plataform como base para execução.
     - Não é mais necessário ter a versão PRO, mas é necessário ter o Windows 10 versão 19.03 ou superior e no mínimo 4GB de RAM. Além de ter o Virtual Machine Platform habilitado.

Escolhendo a 3ª maneira por apresentar uma melhor performance, então segue-se com a instalação do WSL2 primeiro e, em seguida, com a instalação do Docker Desktop.

**Processo de instalação do WSL2**:
Passos:
1. Executar o Powershell em modo Administrador;
2. Executar o comando ´dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart´;
3. Executar o comando ´dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart´;
4. Reinicie a máquina;
5. Habilitar o kernel do Linux clicando no link e baixando-o. [Pacote de atualização do kernel do Linux do WSL2 para computadores x64](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
6. Verificar o funcionamento do WSL2. Abra o PowerShell e execute o comando `wsl --set-default-version 2`
7. Abra a Microsoft Store e baixe a distribuição Linux desejada. Recomenda-se instalar as versões LTS.
8. Pronto

**Instalando o Docker Desktop**:
- Após o WSL2 instalado, agora é necessário instalar o Docker Desktop para Windows no site: https://www.docker.com/products/docker-desktop
- Feito a instalação do docker Desktop, acesse a aba Resource (Recursos) e verifique se a integração com o ambiente WSL2 está marcada, senão estiver, marque-a e em seguida marque a distribuição que deseja fazer a integração. Pronto! Com essa configuração não será necessário instalar o Docker para cada distribuição, pois o Docker está sendo executado dentro do WSL (`Rede\wsl$\docker-desktop`) em uma distribuição Linux separado e fazendo o compartilhamento da ferramenta para as outras distribuições.

**Dicas**:
- Dica #1:
Backup fácil do sistema Linux inteiro.
Passos:
1. Acessar o caminho em que o Linux foi instalado. Normalmente estára dentro de `NomedoUsuário\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu20.04onWindows_blabla\LocalState`

Lembrando que um jeito fácil da acessar a pasta AppData é abrindo qualquer pasta no Windows e, na barra de endereço, digitar `%appdata%` que você será redirecionado para a pasta `AppData/Roaming`. Daí basta voltar para pasta AppData.

2. Nesta pasta estará todo o sistema Linux (ou qualquer outra distribuição ou sistema, lembrando que a pasta CanonicalGroupLimited... pode mudar dependendo do sistema escolhido). Então basta copiar esse arquivo e copiar para outro lugar desejado e pronto, backup do sistema WSL2 feito.
   
- Dica #2:
Acelerar o build do Docker.
Passos:
1. Dentro do Ubuntu, na home (`/~`), executar o comando `vim .profile` ou, caso não goste do editor de texto vim, usar o comando `code .profile` para editor o arquivo de texto dentro do vscode;
2. Na última linha do arquivo adicionar a instrução `export DOCKER_BUILDKIT=1`.

### Mac


**FONTE:** [Guia rápido do WSL2 + Docker.](https://github.com/codeedu/wsl2-docker-quickstart)

## Comandos
Lista de comandos do Docker
| Comando                  | O que faz?                                           |
|--------------------------|------------------------------------------------------|
| `docker build`. | Constrói uma imagem a partir de um arquivo Dockerfile e de um contexto (conjunto de arquivos na localização, PATH ou URL, especificada). |
| `docker exec nome_do_container comando`. | Executa um comando em um container que está rodando (está com o status *up*). **IMPORTANTE**: O terminal não ficará disponível para receber novos comandos. Para fazer isso é necessário executar a instrução passando `-it`, logo `docker exec -it nome_do_container comando`. |
| `docker images -a`. | Lista todas as imagens disponíveis no host. |
| `docker images`. | Lista as imagens disponíveis no host. |
| `docker login`. | Realiza o login, via terminal, no Docker Hub. Quando esse comando é executado, é necessário informar o usuário (*username*) e a senha (*password*). |
| `docker logout`. | Realiza logout, via terminal, do Docker Hub. |
| `docker network`. | Esse comando permite o gerenciamento de redes. Ao executar esse comando é exibido uma lista de subcomandos que permitem conectar(`connect`), criar(`create`), desconectar(`disconnect`), inspecionar(`inspect`), listar(`ls`), remover todas as redes que não estão sendo usadas(`prune`), remover uma ou mais redes(`rm`). |
| `docker network COMMAND --help`. | Usado para obter mais informações sobre o comando especificado. |
| `docker network connect <nomedarede>`. | Conecta um container à rede especificada. |
| `docker network create <nomedarede>`. | Cria uma rede com o nome especificado. |
| `docker network disconnect <nomedarede>`. | Desconecta uma container da rede especificada. |
| `docker network inspect <nomedarede>`. | Exibi informações detalhadas de uma ou mais redes. |
| `docker network ls`. | Lista as redes do Docker. |
| `docker network prune`. | Remove todas as redes que não estão sendo usadas. |
| `docker network rm`. | Remove uma ou mais redes. |
| `docker pause`. | Pausa um container ativo. |
| `docker ps -a`. | Lista os containers que estão na máquina e o seu status |
| `docker ps`. | Lista os containers que estão **rodando** na máquina e o seu status. |
| `docker pull`. | Faz um pull (download) de uma imagem de um servidor, por padrão o docker hub. |
| `docker push`. | Faz um push (upload) de uma imagem que está no seu computador para um servidor, por padrão o docker hub. |
| `docker rename`. | Renomeia um container existente. |
| `docker restart`. | Reinicia um container que está rodando ou parado. |
| `docker rm $(docker ps -a -q)`. | Remove todos os containers listados. |
| `docker rm -f $(docker ps -a -q)`. | Remove todos os containers listados, tanto os que estão rodando quanto os que não estão. As opções, `-f` é para forçar o container parar, `-a` é para listar todos os containers, até os que estão parados, `-q` é a opção *quiet* que serve para retornar apenas os id's dos containers. |
| `docker rm`. | Remove um ou mais containers pelo id. |
| `docker rmi $(docker images -q)`. | Remove todas as imagens listadas. |
| `docker rmi`. | Remove uma ou mais imagens pelo id. |
| `docker run`. | Executa um comando em um novo container |
| `docker run -d nome_da_imagem`. | Cria um container a partir de uma imagem de modo desanexado (*detached*), liberando o terminal para outros fins. |
| `docker run hello-world`. | Tenta executar a imagem hello-world, senão encontrar a imagem irá executar o download da mesma para a máquina(irá baixar a imagem direto do docker hub por padrão) e, então, criar o container e depois finalizará o processo, matando a imagem. |
| `docker run -it nome_da_imagem:tag_da_imagem comando_a_ser_executado`. | Executa o docker de modo interativo (`-i` que significa *interactive*, ou interativo), para manter o processo rodando, e de modo que seja possível executar comandos (`-t` que significa *tty*). O Docker então, irá tentar criar o container se baseando na imagem tageada (ou não) passada como parâmetro e depois executar o comando passado. Caso a imagem não exista, o Docker irá tentar baixá-la. Exemplo: `docker run -it ubuntu:latest bash`. |
| `docker run -it --rm nome_da_imagem comando_a_ser_executado`. | A opção `--rm` informa para o Docker que quando o processo for finalizado, ou seja qunado a execução do container for parada, a imagem deverá ser removida automaticamente. |
| `docker run --mount type=bind, source=caminho_host, target=caminho_container nome_da_imagem`. | Possui a mesma função do comando `docker run -v`, a diferença é que, além de ser mais explícito, não cria pasta (ou arquivo) caso ela não exista. Exemplo: `docker run --mount type=bind, source="$(pwd)"/html, target=/user/share/nginx/html nginx` |
| `docker run --mount type=volume, source=nome_do_volume, target=caminho_container nome_da_imagem`. | Além de criar um container, cria um volume dentro do container no caminho especificado no parâmetro *target*. É possível acessar essa pasta criada a partir do comando `docker exec -it nome_da_imagem bash` e criar arquivos dentro da pasta com o comando `touch`, por exemplo. Se criarmos outro container a partir da mesma imagem, apenas mudando o nome do container, o arquivo criado dentro do volume estará disponível para os dois containers. Exemplo: `docker run --name nginx -d --mount type=volume, source=meuvolume, target=/app nginx`. |
| `docker run --name nome_do_container nome_da_imagem`. | Cria um container com o nome passado por parâmetro baseado na imagem informada. |
| `docker run -p porta_do_host:porta_do_container nome_da_imagem`. | Cria um container baseado na imagem passada e realiza um redirecionamento da porta do container para a porta do host. Exemplo: `docker run -p 8080:80 nginx`. |
| `docker run -v caminho_host:caminho_container`. | Além de criar um container, cria um *bind mount*, pegando os arquivos da pasta do host e copiando-os para dentro da pasta do container, caso o caminho especificado do lado do host não exista, ele será criado. Todas as vezes que o container for iniciado, ele realizará esse processo. Exemplo: `docker run -d --name nginx -p 8080:80 -v ~/docker/html/:/usr/share/nginx/hmt nginx`. |
| `docker run --rm`. | Por padrão os arquivos de sistema dos containers são persistidos mesmo depois do container ter sido parado, esse comportamento faz com que o processo de debugging torne-se mais fácil, porque é possível inspecionar o estado final, e todos os dados são retidos por padrão. Porém, se você estiver executando um processo primário de curta duração, esses arquivos de sistema dos containers podem se acumular. Caso deseje que o Docker remova automaticamente esses arquivos de sistema e deixe o container limpo quando o mesmo for parado(sua execução for terminada), basta adicionar a *flag* `--rm`. Vale lembrar que se a *flag* `--rm` for usada, o Docker também removerá os volumes anônimos associados ao container quando o mesmo for removido. Sendo similar ao comando `docker rm -v my-container`. Apenas os volumes definidos sem nome serão removidos. [Referência e mais informações](https://docs.docker.com/engine/reference/run/#clean-up---rm) |
| `docker start (container-id)`. | Inicia o container informado por parâmetro. |
| `docker stats`. | Exibe informações do uso de CPU, memória e rede. |
| `docker stop $(docker ps -a -q)`. | Para todos os containers listados. |
| `docker stop (container-id)`. | Para o container informado desde que esteja rodando. |
| `docker top`. | Exibe os processos rodando em um container. |
| `docker volume create`. | Cria um volume. |
| `docker volume inspect`. | Exibe as informações detalhadas de um ou mais volumes. |
| `docker volume ls`. | Lista todos os volumes no host. |
| `docker volume prune`. | Remove todos os volumes locais que não estão sendo utilizados. |
| `docker volume rm $(docker volume ls -q)`. | Remove todos os volumes listados. |
| `docker volume`. | Lista os comandos de gerenciamento de volumes do Docker. |


## Dockerfile
O Docker pode criar (ou construir) imagens a partir da leitura de instruções presentes no arquivo *Dockerfile*. *Dockerfile* é um documento (arquivo) de texto que contém todos os comandos que um usuário poderia chamar na linha de comando para montar uma imagem (Docker Docs). Usando o comando `docker build`, os usuários podem criar uma *build* automatizada que executa diversas instruções de linha de comando em sequência.

**Instruções para executar os exemplos de Dockerfile:**
Modelo: `docker build -t nome_do_usuário_dockerhub/nome-da-imagem:latest caminho_para_Dockerfile`. Exemplo: `docker build -t nome_do_usuário_dockerhub/ngnix-com-vim:latest .`

**Exemplos de Dockerfile:**
- [1.Dockerfile](./1.Dockerfile)
- [2.Dockerfile](./2.Dockerfile)
- [3.Dockerfile](./3.Dockerfile)

### Comandos
- **FROM:** Especifica a imagem pai na qual será construída o container. A instrução `FROM` inicializa um novo estágio de *build* e define a imagem base para instruções subsequentes. Vale lembrar que um *Dockerfile* válido deve começar com a instrução `FROM` e que a imagem pode ser qualquer imagem válida. Ainda, 
  - a instrução `ARG` é a única que pode preceder a instrução `FROM`,
  - `FROM` pode aparecer múltiplas vezes em um *Dockerfile* para criar multiplas imagens ou usar uma fase da *build* como dependência para outras. Simplesmente anote o ID da última imagem antes de cada nova instrução `FROM`. Cada instrução `FROM` limpa qualquer fase criada por instruções anteriores.
  - Opcionalmente um nome pode ser dado para um novo estágio de *build*, adicionando `AS name` à instrução `FROM`. O nome pode ser usado em instruções subsequentes, como `FROM` e `COPY --from=<name>`, para se referir à imagem construída nesse estágio.
  - Os valores das `tag` ou `digest` são opcionais. Se você escolher omitir ambos, o construtor (*builder*) irá assumir a *tag* `latest` por padrão. O construtor irá retornar um erro caso não encontre o valor da *tag*, ou seja, caso a *tag* informada não exista.
  Modelos:
  `FROM [--platform=<platform>] <image> [AS <name>]`
  `FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]`
  `FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]`

  A *flag* opcional `--platform` pode ser usada para especificar a plataforma da imagem em casos da instrução `FROM` referenciar uma imagem multi-plataforma. Por exemplo, `linux/amd64`, `linux/arm64` ou `windows/amd64`.

- **RUN:** Executa o comando informado.
- **WORKDIR:** Criar uma pasta de trabalho dentro do container. Quando iniciar o container, esta pasta será criada e todo trabalho (código desenvolvido) será armazenado dentro desta pasta.
- **COPY:** Copia uma pasta do host para dentro do container.
- **USER:** Acessa um usuário dentro do container criado, caso ele exista.
- **ENTRYPOINT:** Esse comando permite configurar um container que rodará como um executável e receberá os parâmetros informados. É possível sobrescrever o *entrypoint* informado no Dockerfile executando o `docker run` com a *flag* `--entrypoint`, `docker run --entrypoint`. Em um arquivo *Dockerfile*, apenas o último comando `ENTRYPOINT` será considerado. Esse comando possui duas formas:
  - **Forma exec (exec form)**. Você pode usar a forma *exec* para configurar argumentos e comandos fixos e, então, usar o comando `CMD`, na forma *exec* também, para configurar parâmetros adicionais que são mais prováveis de serem mudados. Modelo: `ENTRYPOINT ["executable", "param1", "param2"]`.
  
  **Exemplos:**
1. 
   ```dockerfile
   FROM ubuntu
   ENTRYPOINT ["top", "-b"]
   CMD ["-c"]
   ```
   Então,
   ```docker
   docker run -it --rm --name test top -H
   ```
2. 
   ```dockerfile
   FROM debian:stable
   RUN apt-get update && apt-get install -y --force-yes apache2
   EXPOSE 80 443
   VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
   ENTRYPOINT ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
   ```

   - **Forma shell (shell form)**. Esse comando permite especificar uma *string* pura que será executada em `/bin/sh -c`. Essa forma usará o processamento do shell para substiuir as variáveis de ambiente do shell e ignorará quaisquer argumentos de linha de comando vindos do `CMD` ou do `docker run`. Para garantir que o comando `docker stop` sinalizará qualquer executável `ENTRYPOINT` rodando corretamente, será necessário começar o comando com `exec`, em outras palavras, para garantir que o comando `docker stop` conseguirá parar o container corretamente, é necessário começar o comando `ENTRYPOINT` com `exec`. Modelo: `ENTRYPOINT exec command param1 param2`
  
  **Exemplos:**
  ```dockerfile
  FROM ubuntu
  ENTRYPOINT exec top -b
  ```

- **CMD:** Esse comando fornece padrões para a execução do container. Esses padrões podem incluir um executável ou omití-lo, em todo caso deve ser especificado a instrução `ENTRYPOINT`. Em palavras simples, a instrução `CMD` permite a execução de um comando quando a imagem for executada. É importante ressaltar que se o usuário especificar argumentos para o `docker run` então eles irão sobrescrever os argumentos especificados no `CMD`, por exemplo, suponha o seguinte Dockerfile:
   ```dockerfile
   FROM ubuntu:latest
   CMD ["echo", "Hello World"]
   ```
para construir o container `docker build -t nome_usuario_dockerhub/nome_do_container`, para rodar o container passando parâmetros `docker run --rm nome_usuario_dockerhub/nome_do_container echo "oi"`, logo a saída será "oi" e não "Hello World".

Essa instrução possui duas formas de ser utilizada, sendo elas:
  - **Forma shell (shell form)**. Por padrão executará o comando informado com o shell `/bin/sh -c`. Modelo: `CMD command param1 param2`.
  
  **Exemplo:**
   ```sh
   FROM ubuntu
   CMD echo "Isso é um teste." | wc -
   ```
  - **Forma exec (exec form)**. Nessa forma os comandos devem ser expressos em forma de *array* como em arquivos JSON, logo as aspas duplas devem ser usadas e não a simples. Ainda é necessário informar o caminho completo do executável caso queira o executável e qualquer parâmetro adicional deve ser individualmente expresso como *strings* no *array*. Modelo: `CMD ["executable", "param1", "param2"]`.

   **Exemplo:**
   ```sh
   FROM ubuntu
   CMD ["/usr/bin/wc", "--help"]
   ```

Só pode haver um `CMD` por *Dockerfile*, caso haja mais de um, apenas o último `CMD` será considerado.

**Entendimento de como os comandos CMD e ENTRYPOINT interagem**
Ambas as instruções `CMD` e `ENTRYPOINT` definem qual comando será executado quando o container rodar. Há algumas poucas regras que descrevem suas cooperações.
1. Dockerfile deve especificar no mínimo um comando `CMD` ou `ENTRYPOINT`.
2. `ENTRYPOINT` deve ser definido quando o container é usado como executável.
3. `CMD` deve ser usado como uma maneira de definir argumentos padrões para o comando `ENTRYPOINT` ou para executar um comando *ad-hoc* no container.
4. `CMD` será sobescrito quando o container for executado com argumentos alternativos.

A tabela abaixo mostra qual comando é executado para combinações diferentes entre `ENTRYPOINT`/`CMD`

|  | Sem ENTRYPOINT | ENTRYPOINT exec_entry p1_entry | ENTRYPOINT["exec_entry","p1_entry"] |
|---|--------------|---------------------------------|--------------------------|
| **Sem CMD** | erro, não é permitido | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry |
| **CMD["exec_cmd","p1_cmd"]** | exec_cmd p1_cmd | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry exec_cmd p1_cmd |
| **CMD["p1_cmd","p2_cmd"]** | p1_cmd p2_cmd | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry p1_cmd p2_cmd |
| **CMD exec_cmd p1_cmd** | /bin/sh -c exec_cmd p1_cmd | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd |

**FONTE:** [Docker Docs](https://docs.docker.com/engine/reference/builder/)

### Dicas
1. Quando for executar algum comando dentro de um container, execute `apt-get update` antes, para baixar todos os arquivos disponíveis da imagem. Por padrão a imagem não vem com esses arquivos instalados, pois assim a imagem fica mais leve. Portanto antes de realizar, por exemplo, um `apt-get install`, realize um *update* antes.

# Network (rede) Docker
No subsistema Docker exitem, baiscamente, 5 tipos de rede, são elas:
- `bridge`: É o driver de rede padrão, logo é sempre usado quando não se especifica o driver. Dentre todos os tipos de drivers de rede, o tipo `bridge` (ponte) é o mais usado. Indica-se utilizá-lo quando os aplicativos executados dentro dos containers precisam se comunicar entre eles.
- `host`: Assim como o driver de rede do tipo `bridge`, o tipo `host` também tem o objetivo de conectar os aplicativos executados dentro dos containers, porém realiza essa tarefa por meio da rede do *host* dos containers, ou seja, o computador local conseguirá acessar as portas dos containers que estão rodando sem precisar realizar o comando `docker run --expose <port>`, pois os constainers estarão na mesma rede que o computador local.
- `overlay`: É um driver de rede de sobreposição e é pouco utilizado. Normalmente utiliza-se esse tipo de rede quando há vários Dockers instalados em diversas máquinas e todos eles (contaienrs criados em cada Docker) precisam se comunicar, ou seja, é necessário estabelecer uma comunicação com containers que estão sendo executados em diferentes hosts. Também há um uso comum desse tipo de rede no serviço do Docker Swarm para que os containers se comuniquem. **OBS.:** Docker Swarm é uma ferramenta nativa do Docker que permite a orquestração, ou seja, permite que os containers distribuídos em diversos hosts sejam executados em um cluster e, neste cluster, é possível controlar a quantidade de containers, registro, deploy e update de serviços.
- `macvlan`: O tipo de rede macvlan permite que você atribua um endereço MAC para um container, fazendo parecer que tem um dispositivo físico conectado na rede. O Docker daemon faz o tráfico de rotas do container através do seu endereço MAC. Usar o tipo de rede `macvlan` é, algumas vezes, a melhor escolha quando está lidando com aplicativos legados (antigos) que esperam ser conectados diretamente a uma rede física ou invés de serem roteados pela rede host do Docker.
- `none`: Esta opção desativa a todas as redes para o container especificado. Normalmente é usado em conjunto com um driver de rede personalizado. Esta opção de rede também está disponível para ser usada em serviços *swarm*.
- Plugins de rede: Está opção permite instalar plugins de rede de terceiros com o Docker. Esses plugins estão disponíveis no [Docker Hub](https://hub.docker.com/search?category=network&q=&type=plugin) ou em fornecedores terceirizados. É recomendado consultar a documentação do fornecedor para instalar e usar um determinado plugin de rede de terceiros.

[Referências](https://docs.docker.com/network/)

# Exemplo. Conectando containers
## Rede do tipo brigde
1. Usando a rede padrão
- Criando dois containers:
  - `docker run -d -it --name ubuntu1 bash`
  - `docker run -d -it --name ubuntu2 bash`
- Acessando um dos containers:
  - `docker attach ubuntu1`
  - `ip addr show` pegar o ip do outro container.
  - `ping <ip-ubuntu2>`. Verificando que os containers estão se comunicando.

2. Especificado o tipo da rede como `bridge`
- Criando uma rede do tipo bridge:
  - `docker network create --driver bridge minharede`
  - `docker run -dit --name ubuntu1 --network minharede bash`
  - `docker run -dit --name ubuntu2 --network minharede bash`
  - `docker exec -it ubuntu1 bash`. Acessando o container de nome ubuntu1
  - `ping ubuntu2`. Container ubuntu1 se comunicando com o ubuntu2.
  - `docker run -dit --name ubuntu3 bash`. Criando mais um container, porém fora da network criada.
  - `docker network connect minharede ubuntu3`. Connectando o container ubuntu3 na network minharede.
  - `docker exec -it ubuntu3 bash`. Executando o bash do container ubuntu3.
  - `ping ubuntu2`. Verificando que ubuntu2 e ubuntu3 agora estão conectados na mesma rede.

## Rede do tipo host
- Criando a rede do tipo host:
  - `docker run --rm -d --name nginx --network host nginx`
  - Executando `curl http://localhost` é possível visualizar a página do nginx.

**IMPORTANTE:** Se estiver trabalhando com Docker no Mac esses comandos não irão funcionar! Pois o Docker foi desenvolvido para funcionar no Linux e, portanto, não irá conseguir estabelecer conexão com o host, apresentando a mensagem `curl: (7) Failed to connect to localhost port 80: connection refused`.

### Dicas
As vezes é necessário fazer com que o container consiga acessar uma dada informação do host. Então, suponha que na máquina(host) tenha instalado o php e tenha subido o servidor com o comando `php -S 0.0.0.0:8000`. É possível acessar as informações expostas pelo php na porta 8000 excutando o comando `curl http://host.docker.internal:8000` de dentro do container.

# Otimização utilizando Multistage Building
## Por que é importante ter uma imagem enxuta?
Uma imagem enxuta, para ambientes de produção, é melhor porque é mais rápido para subir a imagem (realizar o *deploy* ou fazer o *upload* da imagem) e mais rápido para baixar a imagem. Ainda, quanto menor a imagem, menor são as changes da imagem possuir alguma vulnerabilidade de segurança.

## Imagem Docker para produção
Gerando uma imagem Docker para produção, temos dois pontos importantes para nos atentarmos.
1. Normalmente utiliza-se um servidor de proxy reverso para receber as requisições e chamar o container específico para aquela requisição. **Exemplo:** Podemos utilizar o Ngnix como servidor de proxy reverso que receberá as requisições e chamará um container PHP (rodando em *fast CGI* para conexão com o Ngnix). O container PHP, por sua vez, será executado e retornará uma resposta (*response*) para o Ngnix. O Ngnix então, irá retornar essa resposta para o usuário final.
2. Para reduzir o tamanho da imagem, pode-se utilizar o alpine linux. E, por ser um sistema bem enxuto, costuma-se realizar o *multistage building*, aonde o processo de *building* (construção) da imagem é feita em duas ou mais etapas.

## Por que utilizar o Ngnix como servidor de *proxy* reverso?
Frequentemente você irá se deparar com o Ngnix sendo utilizado como servidor de *proxy* reverso, isso se deve ao fato das diversas funcionalidades que o servidor Ngnix apresenta, mas antes de apresentar as vantagens, vamos entender o que é o Nginx.

### Ngnix
Ngnix é um servidor HTTP, um servidor de *proxy* reverso, um servidor de *proxy mail* e um servidor de *proxy* TCP/UDP genérico, originalmente escrito por Igor Sysoev.

[Fonte](https://nginx.org/en/)

**Exemplo:**
- [Dockerfile produção](laravel/Dockerfile.prod). Para executar: `docker build -t <usuário>/laravel:prod laravel -f laravel/Dockerfile.prod`

# Exercícios
## Docker + Laravel
- [Dockerfile](./laravel/Dockerfile)
- Terminal: acessar a pasta laravel
  `docker build -t DockerHubID/laravel .`
  `docker run --rm -d --name laravel -p 8000:8000 DockerHubID/laravel`
  ou
  `docker run --rm -d --name laravel -p 8001:8001 DockerHubID/laravel --host=0.0.0.0 --port=8001`

## Docker + NODE
- [Dockerfile](./node/Dockerfile)
- Terminal: acessar a pasta node
  `docker build -t DockerHubID/hello-express .`
  `docker run -p 3000:3000 DockerHubID/hello-express:latest`

**IMPORTANTE:** No powersheel do Windows não se utiliza `$(pwd)`, mas sim `${pwd}`.[Referência](https://stackoverflow.com/questions/45682010/docker-invalid-reference-format)

# Referências
1. Luiz Carlos. Guia rápido do WSL2 + Docker. https://github.com/codeedu/wsl2-docker-quickstart
2. FreeCodeCamp. How to Remove Images and Containers in Docker. https://www.freecodecamp.org/news/how-to-remove-images-in-docker/
3. TIBCO. How to Do a Clean Restart of a Docker Instance. https://docs.tibco.com/pub/mash-local/4.3.0/doc/html/docker/GUID-BD850566-5B79-4915-987E-430FC38DAAE4.html
4. Docker Docs. Dockerfile reference. https://docs.docker.com/engine/reference/builder/
5. Red Hat. O que é Docker?. https://www.redhat.com/pt-br/topics/containers/what-is-docker
6. Wikipédia. Daemons (computação). https://pt.wikipedia.org/wiki/Daemon_(computa%C3%A7%C3%A3o)
7. Jeff Nickoloff. Docker in Action.
8. Docker. Use containers to Build, Share and Run your applications. https://www.docker.com/resources/what-container