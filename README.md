<p  align="center"><img src="./apresentacao/logo.jpg" align="center"></img></p>

<p align="center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JCDMeira/js-ts-completo">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/JCDMeira/js-ts-completo">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JCDMeira/js-ts-completo">
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/JCDMeira/js-ts-completo">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/JCDMeira/js-ts-completo?style=social">  <image alt="GitHub Social"  
  src="https://img.shields.io/github/watchers/JCDMeira/js-ts-completo?style=social" 
  />
</p>

# 📋 Indíce 
- [Detalhes do Curso](#id01)
  - [Instrutor](#id02)
  - [Projetos desenvolvidos no curso](#id02.1)
    - [Landing-page modelo](#id02.2)
- [Como usar esse projeto](#id03)
  - [Procedimentos de instalação](#id04)
  - [Dicas para acompanhar](#id05)
- [Meios de contato](#id06)

# 💻 Curso de JavaScript e TypeScript do básico ao avançado 2020 <a name="id01"></a>
Curso de JavaScript e TypeScript do básico ao avançado - Atualizado para 2020 -  Curso  completo sobre todas as nuances do JavaScript na atualidade.

Contempla Javascript moderno (ES6+) para front-end (com Webpack, babel, React, React Hooks e Redux) e back-end (com Node, Express, MySQL / MariaDB e MongoDB) para se tornar um desenvolvedor(a) full stack.

<h2> Instrutor Otávio Miranda<a name="id02"></a> </h2>

Trabalha há mais de 12 anos com desenvolvimento de softwares para terceiros usando várias linguagens, libs e frameworks diferentes.

Especializado em desenvolvimento web voltado para e-commerces.

Atua tanto em front-end quanto back-end.

Atuou no setor de provedores de internet, trabalhando com infraestrutura de redes (wireless, fibra óptica, cabeamento, etc...). No mesmo seguimento, também atuou na área de  administração de servidores Linux.

Está em contínuo aprendizado.

Atualmente, mantem softwares próprios criados para terceiros e ensina o que sabe para outros desenvolvedores.

Músico nas horas vagas.

[Otávio Miranda](https://www.otaviomiranda.com.br)

# 📝 Projetos desenvolvidos no curso <a name="id02.1"></a>
No presente curso ha alguns projetos com o objetivo de consolidar o aprendizado durante o curso, e esses foram separados do repositório do curso.

## 📝 Landing-page modelo<a name="id02.2"></a>

Foi criado na seção 34, usando como base todo conteúdo da seção 33 sobre HTML5 e CSS3.
O modelo contempla uma landing-page de página única, com menu superior e diversas seções. As seções estão ancoradas ao menu por seus IDs e podem ser acessadas de forma rápida através dele, ou se desejar é possível apenas scrolar o mouse.

Abaixo segue o link para o repositório, e nele é possível ver o deploy do projeto.

[Landing-page modelo](https://github.com/JCDMeira/landing-page-modelo)


# 📝 Como usar o projeto <a name="id03"></a>

Este projeto conterá anotações e resumos do meu aprendizado conforme faço o curso.
Para maiores imersões recomendo que adquira o curso e use também os materiais indicados pelo professor no decorrer das aulas.



## 📝 Procedimentos de instalação <a name="id04"></a>

Clone este repositório usando o comando:
```bash
git clone https://github.com/JCDMeira/js-ts-completo.git
``` 

Observação: Todas as pastas que contiverem um arquivo package.json precisam da instalação da pasta node_modules/
Para isso entre na pasta com navegação

```bash
    cd secao__
    
    # Onde o primeiro espaço vago representa o númerp da seção
    # após indicar o número da seção desejada aperte TAB que será completado o caminho e pressione enter

    cd aula___
    
    # após entrar na pasta da seção digite o mesmo comando, mas agora com aula
    # novamente os ___ representam os números da aula desejada.
    # após preencher os números aperte novamente TAB para autocompletar o caminho
    # então pressione enter.

    # agora já na pasta desejada siga com o comando e as dependências serão completadas
    npm i

``` 
## 📝 Dicas para acompanhar <a name="id05"></a>

Ao acompanhar se recomenda ter a extensão Better Comments no visual studio code, para assim ter melhor visualização dos comentários e notas.
A seguir estão as configurações usadas no better comments.

```
{
    "workbench.iconTheme": "material-icon-theme",
    "terminal.integrated.shell.osx": "/bin/zsh",
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,
    "editor.fontSize": 16,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "workbench.startupEditor": "newUntitledFile",
    "explorer.confirmDelete": false,
    "git.confirmSync": false,
    "better-comments.tags": [
    
        {
            "tag": "!importante",
            "color": "#FF2D00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": true,
            "italic": false
        },
        {
            "tag": "!",
            "color": "#FF2D00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": true,
            "italic": false
        },
        {
            "tag": "@aviso",
            "color": "#ffff00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "@",
            "color": "#ffff00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "#obs",
            "color": "#3498DB",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "#",
            "color": "#3498DB",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "//",
            "color": "#474747",
            "strikethrough": true,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "_nota",
            "color": "#FF8C00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "_",
            "color": "#FF8C00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "-",
            "color": "#FFA56F",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "*Título",
            "color": "#d100fa",
            "strikethrough": false,
            "underline": true,
            "backgroundColor": "transparent",
            "bold": true,
            "italic": false
        },
        {
            "tag": "*",
            "color": "#d100fa",
            "strikethrough": false,
            "underline": true,
            "backgroundColor": "transparent",
            "bold": true,
            "italic": false
        },
        {
            "tag": "?",
            "color": "#00FF7F",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "|",
            "color": "#BF3EFF",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        }
    ],
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "workbench.colorTheme": "Dracula",
    "bracketPairColorizer.activeScopeCSS": [
        
        "borderStyle : solid",
        "borderWidth : 1px",
        "borderColor : {color}; opacity: 0.5"
    ],
    "liveServer.settings.donotShowInfoMsg": true,
    "workbench.editorAssociations": [
        {
            "viewType": "jupyter.notebook.ipynb",
            "filenamePattern": "*.ipynb"
        }
    ],
    "liveServer.settings.donotVerifyTags": true
}
```
Após configurar lembre-se de aplicar um "reload  window" no visual studio code.

# :iphone: Meios de contato <a name="id06"></a>
## Jean Carlos De Meira :coffee:

Perfil do linkedin - [Linkedin](https://www.linkedin.com/in/jean-carlos-de-meira-00593816a/)

Perfil do instagram - [Instagram](https://www.instagram.com/jean.meira10/?hl=pt-br)

Página pessoal - [jcdmeira](https://jcdmeira.github.io)