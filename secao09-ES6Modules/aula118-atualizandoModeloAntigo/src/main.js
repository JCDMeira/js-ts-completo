//* Aula 118 - Nosso modelo antigo (agora com webPack)

/*
    _Nota_
    _ o arquivo de css é importado diretamente, sem nenhuma menção
    _ ( somente o caminha diretamente), conforme abaixo.
    _ então é tirado a importação do css do index. 
    ! O arquivo js que será importado no index.html é o bundle.js 
    ! no caso o arquivo que for criado pelo webpack, seja ele qual nome tiver.

    _ os louders incorporaram os estilos ao site como tags style.
    _ assim o resultado no browser será o site com estilos normalmente
*/

import './assets/css/style.css';
