"use client";
import React, { useEffect, useState } from "react";
//import "../../src/styles/Oferta_cardapio.css";
import { server } from "@/service/server";


interface Categoria_Props {
  categorias: string;
  nome_prato: string;
  valor: number;
}

function Oferta_cardapio() {
  const [prato, setprato] = useState("");
  const [categoria, setcategoria] = useState("");
  const [segmento, setsegmento] = useState("");
  // const[pratos, setpratos] = useState("")
  const [descricoes, setDescricoes] = useState<string[]>([]);
  const [valor, setvalor] = useState("");
  const [resposta, setResposta] = useState<{ mensagem: string } | null>(null);
  const [resumo, setResumo] = useState<string[]>([])

  
useEffect(() => {
  carregarOfertasDoDia();
}, []);

  const segmentar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setsegmento(event.target.value);
  };

  const valores = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setvalor(val);
  };

  const pratos = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pratu = event.target.value;
    setprato(pratu);
  };

  const categorizar = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categ = event.target.value; // Captura o valor da opção selecionada
    setcategoria(categ);
    try {
      const response = await server.post("/servicos_diversos/lista_pratos", {
        categoria: categ,
        segmento: segmento,
      });
      console.log(response.data);
      setDescricoes(
        response.data.map((item: Categoria_Props) => item.nome_prato)
      );
    } catch {}
  };

  async function carregarOfertasDoDia() {
    try {
      const response = await server.get("/servicos_diversos/lista_ofertas", {
        params: { data: formattedDate },
      });
  
      const ofertas = response.data.map((item: any) => `${item.nome_prato} - R$ ${item.valor}`);
      setResumo(ofertas);
    } catch (error) {
      console.error("Erro ao buscar ofertas do dia:", error);
    }
  }

  const timeElapsed = Date.now();
  const currentDate = new Date(timeElapsed);

  // Extrai o dia, mês e ano, ajustando o mês (começa em 0)
  const currentDay = String(currentDate.getDate()).padStart(2, "0");
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentYear = currentDate.getFullYear();

  // Formata a data no padrão yyyy-mm-dd
  const formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;

  async function enviar() {
    try {
      const response = await server.post("/cardapio/oferta_cardapio", {
        valor: valor,
        data: formattedDate,
        categoria: categoria,
        segmento: segmento,
        nome_prato: prato,
      });

      setResumo((prevResumo) => [...prevResumo, `${prato} - R$ ${valor}`]);
      console.log(response.data);
      limparCampos();
      setResposta(response.data);
      setTimeout(() => {
        setResposta(null);
      }, 3000); // A mensagem de sucesso aparece por 5 segundos
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
    }
    
      // try {
      //   const response = await server.get("/servicos_diversos/lista_ofertas");
      // console.log(response.data)
      // } catch (error) {
      //   console.error("Erro ao buscar clientes:", error);
      // }
  }

   
  function limparCampos() {
    setcategoria("");
    setvalor("");
    setprato("");
  }


  return (
    <>
      <div className="cliente">
        <h1 id="servico_cardapiocp">Disponibilização de Pratos</h1>

        <fieldset className="principal_cardapiocp">
          <legend className="labels" id="legenda"></legend>

          <div className="labels1">
            <label htmlFor="" className="labels" id="label10cp">Segmento</label>
            <label htmlFor="" className="labels" id="label11cp">Categoria</label>
            <label htmlFor="" className="labels" id="label12cp">Descrição</label>
            <label htmlFor="" className="labels" id="label13cp">Valor</label>
          </div>

          <div className="inputs1">
            <select  name=""  id="input10cp"  className="inputs"  value={segmento} onChange={segmentar}>
              <option value="">Segmento</option>
              <option value="marmitex">Marmitex</option>
              <option value="fitness">Fitness</option>
            </select>

            <select name="" id="input11cp"  className="inputs" value={categoria} onChange={categorizar}>
              <option value="">Categoria</option>
              <option value="Principal">Principal</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Guarnições">Guarnições</option>
              <option value="Acompanhamento">Acompanhamento</option>
            </select>

            <select  name="" id="input12cp"  className="inputs"  value={prato}   onChange={pratos}>
              <option value="">Selecione uma Descrição</option>
              {descricoes.map((descricao, index) => (
                <option key={index} value={descricao}>
                  {descricao}
                </option>
              ))}
            </select>
              
            <input type="text"  name="" id="valor"   value={valor}  onChange={valores}  className="inputs"/>
          
          
          <button id="botao_cad1cp" onClick={enviar}> Ofertar </button>
        </div>
      </fieldset>

        <div className="resumocp">
              <label htmlFor="" className="labels" id="lbresumocp">Pratos do Dia</label>
              <textarea name="" id="resumo" className="inputs" value={resumo.join("\n")} readOnly></textarea>
          </div>
          
        {resposta && <p className="success-message">{resposta.mensagem}</p>}
      </div>
    </>
  );
}

export default Oferta_cardapio;
