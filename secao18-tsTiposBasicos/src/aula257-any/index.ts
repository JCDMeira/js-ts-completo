// * Aula 257 - tipo any

/*
    _Nota_
    _ você deve evitar usar o tipo any, pois ele simboliza qualquer tipo
    _ o any pode ser implícito -> você não deve usar
      - caso abaixo
        ? function showMessage(msg) {
        ? return msg
        ? }
    _ ou explícito, que é quando indicamos concientemente
    _ esse é possível usar, mas com muito cuidado
      - caso abaixo
        ? function showMessage(msg: any) {
        ? return msg
        ? }

    ! utilize any apenas em último caso
*/

function showMessage(msg: any) {
  return msg
}
