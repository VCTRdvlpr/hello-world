import React from 'react';
import './App.css';
import NavBtnComponent from './components/navBtnComponent';
import { useState } from 'react';

function App() {

  const[contentVisibleHttp, setContentVisibleHttp] = useState(false);

  const handleButtonClickHttp = () =>{
    setContentVisibleHttp(!contentVisibleHttp)
  }

  const[contentVisibleVeVector, setContentVisibleVector] = useState(false);

  const handleButtonClickVector = () =>{
    setContentVisibleVector(!contentVisibleVeVector)
  }

  const[contentVisibleTcp, setContentVisibleTcp] = useState(false);

  const handleButtonClickTcp = () =>{
    setContentVisibleTcp(!contentVisibleTcp)
  }

  return (
    <div>
      <h1>Hello world !</h1>    
      <nav>
        <ul className='nav-align'>
          <li>
            <NavBtnComponent title='Http' onClick={handleButtonClickHttp} />
            {contentVisibleHttp && 
              <div className='content-align'>
              <h2>O que é?</h2>
              <p>O HTTP (Hypertext Transfer Protocol ou Protocolo de Transferência de Hipertexto em português) é um 
                protocolo que especifica como será a comunicação entre um navegador e um servidor web, sendo um dos 
                principais da World Wide Web (WWW). <br /><br />
                
                O HTTP é um protocolo cliente-servidor: as
                requisições são enviados por uma entidade, o agente-usuário (ou um proxy em nome dele). A maior 
                parte do tempo, o agente-usuário é um navegador da Web, mas pode ser qualquer coisa, como por exemplo
                um robô que varre a Web para preencher e manter um índice de mecanismo de pesquisa e coletar
                informações. <br /><br />

                Cada requisição individual é enviada para um servidor, que irá lidar com isso e fornecer um
                resultado, chamado de resposta. Entre a solicitação e a resposta existem várias entidades, designadas 
                coletivamente como proxies, que executam operações diferentes e atuam como gateways (intermediários) 
                ou caches, por exemplo.
              </p>
              </div>
            }
          </li>
          <li>
            <NavBtnComponent title='WWW' onClick={handleButtonClickVector} />
            {contentVisibleVeVector && 
            <div className='content-align'>
              <h2>O que é?</h2>
              <p>WWW são as iniciais de World Wide Web (rede de alcance mundial), que é o sistema de documentos de 
                hipertexto que se encontram ligados entre si e que são acessíveis através da Internet. Através de 
                um software conhecido sob o nome de navegador, os utilizadores podem visualizar as páginas 
                electrónicas (que contenham texto, imagens, vídeos e outros conteúdos multimédia) e navegar nas 
                mesmas por intermédio de hiperligações. <br /><br />

                O funcionamento da WWW começa a partir do momento em que um utilizador insere/digita um endereço 
                (URL) no seu navegador ou se clicar numa ligação de hipertexto que se encontre numa determinada 
                página electrónica. O navegador inicia então uma série de comunicações para obter os dados da página
                solicitada e, por conseguinte, visualizá-la. <br /><br />

                O primeiro passo consiste em converter o nome do servidor da URL num endereço IP, utilizando a base 
                de dados conhecida pelo nome de DNS. O endereço IP permite contactar o servidor da Web em questão e 
                enviar-lhe todos os dados. <br /><br />

                Depois, é enviado o protocolo de comunicação HTTP ao servidor, solicitando o acesso ao recurso. Em 
                primeiro lugar, é solicitado o texto HTML e, depois é analisado pelo navegador, que realiza 
                protocolos adicionais para os gráficos e outros arquivos que façam parte da página.

                
              </p>
            </div>}
          </li>   
          <li>
            <NavBtnComponent title='TCP/IP' onClick={handleButtonClickTcp} />
            {contentVisibleTcp && 
            <div className='content-align'>
              <h2>O que é?</h2>
              <p>
              TCP/IP significa protocolo de controle de transmissão/protocolo da internet (Transmission Control 
              Protocol/Internet Protocol). TCP/IP é um conjunto de regras padronizadas que permitem que os 
              computadores se comuniquem em uma rede como a internet. <br /><br />

              Por si só, um computador individual pode executar vários trabalhos. Mas o poder real dos computadores 
              se revela quando eles se comunicam. Quando pensamos em computadores, muitas tarefas que eles realizam 
              (enviar mensagens de e-mail, assistir Netflix ou receber instruções) envolvem a comunicação entre 
              computadores. Esses computadores podem ser de empresas diferentes ou até mesmo estar localizados em 
              diferentes partes do mundo, e as pessoas e os programas que os utilizam podem usar diferentes 
              linguagens humanas e de computador. <br /><br />

              Qualquer interação pode ser entre dois sistemas de computador ou pode envolver centenas deles. Mas, da 
              mesma forma que uma carta ou um pacote só pode passar de mão em mão, cada transação ocorre entre 
              apenas dois computadores por vez. Para que isso aconteça, os dois computadores precisam saber, com 
              antecedência, como eles devem se comunicar. <br /><br />

              Para isso, os computadores usam protocolos. Um protocolo é um conjunto de regras combinadas. Em termos 
              humanos, usamos protocolos sociais para saber como nos comportar e nos comunicar com outras pessoas. 
              As tecnologias têm suas próprias maneiras de definir regras de comunicação, como o código Morse usado 
              por telégrafos, ou códigos como "10-4” usadas por uma rádio CB. <br /><br />

              Os computadores funcionam da mesma forma, mas com regras mais rígidas. Apenas quando todos os 
              computadores usam o mesmo protocolo, as informações podem ser transferidas. Caso contrário, é o 
              caos. <br /><br />

              A comunicação era mais complicada quando as pessoas começaram a trocar informações entre computadores. 
              Cada fabricante tinha sua própria maneira de fazer seus computadores se comunicarem, mas isso não 
              permitia a comunicação com os computadores de outros fabricantes. Logo ficou claro que era necessário 
              ter um padrão acordado que permitisse que os computadores de todos os fabricantes se comunicassem. 
              Este padrão é o TCP/IP.                
              </p>

              <h2>Quais são as diferenças entre TCP e IP?</h2>

              <p>
                TCP e IP são dois protocolos de rede de computadores separados. <br /><br />

                IP é a parte que obtém o endereço para o qual os dados são enviados. TCP é responsável pela entrega 
                dos dados assim que o endereço IP for encontrado. <br /> <br />

                É possível separá-los, mas não faz sentido diferenciar entre TCP e IP. Como são usados juntos com 
                frequência, “TCP/IP” e o “modelo TCP/IP” é terminologia reconhecida agora. <br /><br />

                Pense assim: o endereço IP é como o número de telefone atribuído ao seu smartphone. TCP é toda a 
                tecnologia que faz o telefone tocar e permite conversar com alguém em outro telefone. Eles são 
                diferentes um do outro, mas também não fazem sentido um sem o outro.
                </p>

                <h2>E o que o TCP/IP faz, exatamente? E como funciona?</h2>

                <p>
                O TCP/IP foi desenvolvido pelo Departamento de Defesa dos EUA para especificar como os computadores 
                transferem dados de um dispositivo para outro. O TCP/IP enfatiza muito a precisão e tem várias 
                etapas para garantir que os dados sejam transmitidos corretamente entre os dois computadores. <br /><br />

                Veja uma maneira de fazer isso. Se o sistema enviasse a mensagem inteira de uma só vez e encontrasse 
                um problema, a mensagem inteira teria de ser reenviada. No lugar disso, o TCP/IP quebra cada 
                mensagem em pacotes, que são juntados no destino. Na verdade, cada pacote pode chegar até o outro 
                computador por uma rota diferente, se a primeira rota não estiver disponível ou estiver 
                congestionada. <br /><br />

                Além disso, o TCP/IP separa as diferentes tarefas de comunicação em camadas. Cada camada possui uma 
                função diferente. Os dados passam por quatro camadas individuais antes serem recebidos na outra 
                extremidade <br /><br />

                TCP/IP é um protocolo de enlace de dados (datalink) usado na internet. Seu modelo é dividido em 
                quatro camadas distintas. Quando usadas em conjunto, também podem ser chamadas de um conjunto de 
                protocolos. <br /><br />

                </p>

                <h2>Meus pacotes têm privacidade?</h2>

                <p>
                Não. Quando os pacotes são transmitidos entre computadores, eles ficam vulneráveis e podem ser 
                vistos por outras pessoas. Esse é um dos motivos para evitar redes Wi-Fi públicas ao enviar dados 
                que devem permanecer privados e para usar criptografia. <br /><br />

                Se você se preocupa com isso, por exemplo, se estiver enviando informações de identificação pessoal ou financeiras, é possível usar uma rede virtual privada (VPN) para criptografar seus dados.
                </p>                            
            </div>}
          </li>                
        </ul>
      </nav>
    </div>
  );
}

export default App;
