//* Aula 125 - NPM (Node Package Manager)

/* 
    _Nota_ 
    _ instalação de pacotes (ex: express)
        - npm install express
            - "express": "^4.17.1" -> o ^ significa que pode haver atualizações
                - para qualquer versão 4 do express (4.18 etc)
        -npm install express -E
            - "express": "4.17.1" -> remove o ^
                - não pode ser atualizada
        - npm update
            - busca atualizar os pacotes desatualizados.
                - não atualiza os marcados como não pode atualizar
        - npm install express --save-dev
            - move o express para dependência de desenvolvimento
        - npm install express --save-prod
            - move o express para dependência de produção
        - npm install express@2.1.0 -E
            - instala a versão especifica do pacote, e o -E barra atualizações
            - "express": "~4.17.1" -> o ~ significa que pode haver atualizações
                - mas apenas no patch
        - npm install express@4.x
            - instala a versão 4 na última versão
        - npm unistall express
            - desistala o pacote (express no caso)
        - npm ls
            - lista as dependências instaladas
            - porém lista as instaladas, e as que elas dependem também
        - npm ls --depth=0
            - mostra apenas a que foram instaladas mesmo.
        - npm ls --depth=1
            - mostra apenas a que foram instaladas e mais uma profundidade.
        - npm outdated
            - mostra quais pacotes estão desatualizados
            - mostra também qual é a versão de update desejada e as atuais.
        
        !   2.     1.      0
        ! major. minor.  patch
        
        _ patch -> são entre aspas, correções de bugs.
        _ minor -> adiciona funções novas, mas não quebra compatibilidade.
        _ major -> adiciona ou muda recursos e quebra a compatibilidade.
*/ 
