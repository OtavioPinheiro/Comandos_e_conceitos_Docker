# Comandos e conceitos Docker
## Objetivo:
Explicar e demonstrar os comandos e conceitos do Docker.

## Sumário
1. [O que é Docker?](#o-que-é-docker)
2. [Coneitos](#conceitos)
3. [Como se instala?](#como-se-instala)
4. [Comandos](#comandos)

## O que é Docker?


## Conceitos
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


## Comandos
Lista de comandos Docker
| Comando                  | O que faz?                                           |
|--------------------------|------------------------------------------------------|
| `docker ps`              | Lista os containers que estão **rodando** na máquina |
| `docker ps -a`           | Lista os containers que estão na máquina             |
| `docker run hello-world` | Tenta executar a imagem hello-world, senão encontrar a imagem irá executar o download da mesma para a máquina e, então, executá-la e depois finalizará o processo, matando a imagem |


## Referências
- Luiz Carlos. Guia rápido do WSL2 + Docker. https://github.com/codeedu/wsl2-docker-quickstart
- 