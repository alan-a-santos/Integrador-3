  import { conexao } from '../../bd_config/conexao';

  interface dados_acesso {
      usuario: string;
      senha: string;
  }
  let resposta: string = "";
  class login_usuario {
      async execute({ usuario, senha }: dados_acesso) {
          const query = "SELECT * FROM usuarios WHERE usuario = ?";
              const [pesq]: any = await conexao.execute(query,[usuario]);

              if (pesq.length == 0){
                resposta = "Negado"
                return resposta
              }
              const user = pesq[0]

              if (user.senha == senha && user.usuario == usuario){
                resposta="Autorizado"
              }else{
                resposta = "Negado"
              }                   
              console.log(resposta)
              return resposta
        }}
  export { login_usuario };
