# Comandos e conceitos Docker
## Objetivo:
Explicar e demonstrar os comandos e conceitos do Docker.

## Sumário
1. [O que é Docker?](#o-que-é-docker)
2. [Conhecimentos prévios](#conhecimentos-prévios)
3. [Coneitos](#conceitos)
4. [Como se instala?](#como-se-instala)
5. [Comandos](#comandos)

## O que é Docker?
Docker, no que se refere ao software de TI, é uma tecnologia de containerização para criação e uso de container Linux. Com o Docker é possível lidar com os containers como se fossem máquinas virtuais modulares e extremamente leves. Além disso, os containers oferecem maior flexibilidade para você criar, implantar, copiar e migrar um container de um ambiente para outro.

# Conhecimentos prévios.
Alguns termos necessários e interessantes para entender melhor a tecnologia Docker.

## O que são daemons?
Daemons (pronúncia: daimôns), são processos de plano de fundo.

## O que são containers Linux?

## Conceitos
Alguns conceitos sobre Docker.
### O que são imagens?


### O que são containers?


### O que são volumes?


## Como se instala?
Antes de prosseguir com as instalações é importante lembrar que Docker foi construído para ser usado nos SO's Linux, para é possível utilizá-lo em outros sistemas.

### Linux


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
| `docker ps`. | Lista os containers que estão **rodando** na máquina e o seu status. |
| `docker ps -a`. | Lista os containers que estão na máquina e o seu status |
| `docker run`. | Executa um comando em um novo container                 |
| `docker run hello-world`. | Tenta executar a imagem hello-world, senão encontrar a imagem irá executar o download da mesma para a máquina(irá baixar a imagem direto do docker hub por padrão) e, então, criar o container e depois finalizará o processo, matando a imagem. |
| `docker run -it nome_da_imagem:tag_da_imagem comando_a_ser_executado`. | Executa o docker de modo interativo (`-i` que significa *interactive*, ou interativo), para manter o processo rodando, e de modo que seja possível executar comandos (`-t` que significa *tty*). O Docker então, irá tentar criar o container se baseando na imagem tageada (ou não) passada como parâmetro e depois executar o comando passado. Caso a imagem não exista, o Docker irá tentar baixá-la. Exemplo: `docker run -it ubuntu:latest bash`. |
| `docker run -it --rm nome_da_imagem comando_a_ser_executado`. | A opção `--rm` informa para o Docker que quando o processo for finalizado, ou seja qunado a execução do container for parada, a imagem deverá ser removida automaticamente. |
| `docker start (container-id)`. | Inicia o container informado por parâmetro. |
| `docker stop (container-id)`. | Para o container informado desde que esteja rodando. |
| `docker rm`. | Remove um ou mais containers pelo id. |
| `docker rmi`. | Remove uma ou mais imagens pelo id. |
| `docker rm -f $(docker ps -a -q)`. | Remove todos os containers listados, tanto os que estão rodando quanto os que não estão. As opções, `-f` é para forçar o container parar, `-a` é para listar todos os containers, até os que estão parados, `-q` é a opção *quiet* que serve para retornar apenas os id's dos containers. |
| `docker volume`. | Lista os comandos de gerenciamento de volumes do Docker. |
| `docker volume create`. | Cria um volume. |
| `docker volume inspect`. | Exibe as informações detalhadas de um ou mais volumes. |
| `docker volume prune`. | Remove todos os volumes locais que não estão sendo utilizados. |
| `docker volume ls` | Lista todos os volumes no host. |
| `docker volume rm $(docker volume ls -q)`. | Remove todos os volumes listados. |
| `docker images`. | Lista as imagens disponíveis no host. |
| `docker images -a`. | Lista todas as imagens disponíveis no host. |
| `docker rmi $(docker images -q)`. | Remove todas as imagens listadas. |
| `docker stop $(docker ps -a -q)`. | Para todos os containers listados. |
| `docker rm $(docker ps -a -q)`. | Remove todos os containers listados. |
| `docker stats`. | Exibe informações do uso de CPU, memória e rede. |
| `docker top`. | Exibe os processos rodando em um container. |
| `docker rename`. | Renomeia um container existente. |
| `docker restart`. | Reinicia um container que está rodando ou parado. |
| `docker pause`. | Pausa um container ativo. |
| `docker pull`. | Faz um pull (download) de uma imagem de um servidor, por padrão o docker hub. |
| `docker push`. | Faz um push (upload) de uma imagem que está no seu computador para um servidor, por padrão o docker hub. |
| `docker run -p porta_do_host:porta_do_container nome_da_imagem`. | Cria um container baseado na imagem passada e realiza um redirecionamento da porta do container para a porta do host. Exemplo: `docker run -p 8080:80 nginx`. |
| `docker run -d nome_da_imagem`. | Cria um container a partir de uma imagem de modo desanexado (*detached*), liberando o terminal para outros fins. |
| `docker run --name nome_do_container nome_da_imagem`. | Cria um container com o nome passado por parâmetro baseado na imagem informada. |
| `docker exec nome_do_container comando`. | Executa um comando em um container que está rodando (está com o status *up*). **IMPORTANTE**: O terminal não ficará disponível para receber novos comandos. Para fazer isso é necessário executar a instrução passando `-it`, logo `docker exec -it nome_do_container comando`. |
| `docker run -v caminho_host:caminho_container`. | Além de criar um container, cria um *bind mount*, pegando os arquivos da pasta do host e copiando-os para dentro da pasta do container, caso o caminho especificado do lado do host não exista, ele será criado. Todas as vezes que o container for iniciado, ele realizará esse processo. Exemplo: `docker run -d --name nginx -p 8080:80 -v ~/docker/html/:/usr/share/nginx/hmt nginx`. |
| `docker run --mount type=bind, source=caminho_host, target=caminho_container nome_da_imagem`. | Possui a mesma função do comando `docker run -v`, a diferença é que, além de ser mais explícito, não cria pasta (ou arquivo) caso ela não exista. Exemplo: `docker run --mount type=bind, source="$(pwd)"/html, target=/user/share/nginx/html nginx` |
| `docker run --mount type=volume, source=nome_do_volume, target=caminho_container nome_da_imagem`. | Além de criar um container, cria um volume dentro do container no caminho especificado no parâmetro *target*. É possível acessar essa pasta criada a partir do comando `docker exec -it nome_da_imagem bash` e criar arquivos dentro da pasta com o comando `touch`, por exemplo. Se criarmos outro container a partir da mesma imagem, apenas mudando o nome do container, o arquivo criado dentro do volume estará disponível para os dois containers. Exemplo: `docker run --name nginx -d --mount type=volume, source=meuvolume, target=/app nginx`. |
| `docker build`. | Constrói uma imagem a partir de um arquivo Dockerfile e de um contexto (conjunto de arquivos na localização, PATH ou URL, especificada). |
| `docker login` | Realiza o login, via terminal, no Docker Hub. Quando esse comando é executado, é necessário informar o usuário (*username*) e a senha (*password*). |
| `docker logout` | Realiza logout, via terminal, do Docker Hub. |

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

## Referências
1. Luiz Carlos. Guia rápido do WSL2 + Docker. https://github.com/codeedu/wsl2-docker-quickstart
2. FreeCodeCamp. How to Remove Images and Containers in Docker. https://www.freecodecamp.org/news/how-to-remove-images-in-docker/
3. TIBCO. How to Do a Clean Restart of a Docker Instance. https://docs.tibco.com/pub/mash-local/4.3.0/doc/html/docker/GUID-BD850566-5B79-4915-987E-430FC38DAAE4.html
4. Docker Docs. Dockerfile reference. https://docs.docker.com/engine/reference/builder/