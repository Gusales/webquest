import { Breadcumbs } from "@/src/components/breadcrumbs";
import { DefaultHomeLayout } from "@/src/shared/layouts";
import { subject } from "../metadatas";

function Title({ children }: { children: React.ReactNode }) {
    return <h1 className="text-4xl mb-6 text-indigo-900">{children}</h1>
}

function SubTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-3xl mb-4 text-indigo-900">{children}</h2>
}

function HeadingThree({ children }: { children: React.ReactNode }) {
    return <h3 className="text-2xl mb-4 text-indigo-900">{children}</h3>
}

function HeadingFour({ children }: { children: React.ReactNode }) {
    return <h4 className="text-xl mb-4 text-indigo-900">{children}</h4>
}

function Paragraph({ children }: { children: React.ReactNode }) {
    return <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
}

export default function EstatisticaAplicadaConteudo() {
    return (
        <DefaultHomeLayout subject={subject} semester="3º Semestre" showOnlyHeader>
            <Breadcumbs />
            <article className="bg-white rounded-lg shadow-md p-8 mb-8 mt-5 mx-auto">
                <Title>Estatística Aplicada</Title>

                <SubTitle>1. Introdução à Ciência Estatística e Análise de Dados</SubTitle>
                <Paragraph>
                    A estatística, em sua concepção contemporânea, transcende a definição simplista de coleta e tabulação de dados numéricos. Ela constitui uma disciplina científica rigorosa, estruturada para lidar com a variabilidade intrínseca aos fenômenos naturais e sociais. A essência da estatística aplicada reside na capacidade de converter dados brutos — observações fragmentadas e frequentemente caóticas da realidade — em informações estruturadas e, subsequentemente, em conhecimento acionável. Este processo de transformação é governado por uma lógica indutiva, onde conclusões gerais sobre uma população são extraídas a partir da análise detalhada de uma parte representativa dessa totalidade, denominada amostra.
                </Paragraph>
                <Paragraph>
                    A importância da estatística decorre da ubiquidade da incerteza. Em sistemas determinísticos, onde as leis de causa e efeito são perfeitamente conhecidas e imutáveis, a estatística seria desnecessária. No entanto, o mundo real é caracterizado pela estocasticidade; variações ocorrem devido a uma infinidade de fatores não controlados ou desconhecidos. A estatística oferece, portanto, a gramática e o vocabulário para descrever essa incerteza, quantificá-la e, crucialmente, tomar decisões fundamentadas apesar dela. O escopo deste relatório abrange desde os métodos de seleção de dados até a estimação de parâmetros populacionais, excluindo deliberadamente a mecânica dos testes de hipóteses e aplicações gerenciais específicas, para focar na robustez conceitual e matemática necessária para uma compreensão profunda dos fenômenos estocásticos.
                </Paragraph>
                <Paragraph>
                    A análise estatística é tradicionalmente dividida em dois grandes ramos, ambos abordados extensivamente neste documento: a Estatística Descritiva e a Inferência Estatística. A primeira preocupa-se com a organização, resumo e apresentação dos dados de forma informativa. É a fase exploratória, onde se busca entender &quot;o que os dados dizem&quot; através de medidas de tendência central, dispersão e distribuições de frequência. A segunda, a inferência, utiliza a teoria da probabilidade para generalizar as descobertas da amostra para a população maior, sempre associando um grau de confiança a essas generalizações. A transição da descrição para a inferência exige uma compreensão sólida de amostragem, probabilidade e distribuições teóricas, temas que formam a espinha dorsal desta análise.
                </Paragraph>

                <SubTitle>2. Teoria e Técnicas de Amostragem</SubTitle>

                <Paragraph>
                    A validade de qualquer inferência estatística depende, primariamente, da qualidade dos dados nos quais se baseia. Se a matéria-prima (os dados) for viciada ou inadequada, nenhuma técnica analítica, por mais sofisticada que seja, poderá retificar as conclusões. A amostragem, portanto, não é apenas um procedimento logístico de coleta de dados, mas o alicerce metodológico da pesquisa científica. A teoria da amostragem dedica-se a estudar as relações existentes entre uma população e as amostras dela extraídas, permitindo mensurar o erro amostral e garantir a representatividade.
                </Paragraph>

                <HeadingThree>2.1. Conceitos Fundamentais: População, Censo e Amostra</HeadingThree>

                <Paragraph>
                    Para navegar pela teoria da amostragem, é imperativo estabelecer definições precisas. A População (ou universo estatístico) é definida como a totalidade dos elementos (indivíduos, objetos, medições) que possuem pelo menos uma característica comum de interesse para o pesquisador. Esta definição é flexível e depende do objetivo do estudo; uma população pode ser &quot;todos os habitantes do Brasil&quot; ou &quot;todas as lâmpadas produzidas pela máquina B no dia 12 de dezembro&quot;. As populações podem ser finitas, quando é possível enumerar todos os seus componentes, ou infinitas, quando o processo gerador dos dados é contínuo e ilimitado.
                </Paragraph>

                <Paragraph>
                    O <strong>Censo</strong> representa a investigação exaustiva de todos os elementos da população. Embora teoricamente ideal por eliminar o erro de amostragem, o censo é frequentemente impraticável. As barreiras incluem custos proibitivos, tempo excessivo para coleta e processamento, e, em casos de testes destrutivos (como verificar a carga de ruptura de cabos de aço), a impossibilidade física de testar toda a produção. Além disso, em populações muito grandes, um censo pode introduzir erros não amostrais (erros de contagem, registro) superiores aos erros amostrais de uma pesquisa bem desenhada.
                </Paragraph>

                <Paragraph>
                    A <strong>Amostra</strong> surge como a solução pragmática: um subconjunto finito e representativo da população. O termo &quotrepresentativo&quot; é chave; uma amostra deve reproduzir, em escala reduzida, as características essenciais da população, como a distribuição de idade, renda ou variabilidade do processo. A diferença entre o parâmetro populacional (valor real desconhecido) e a estatística amostral (valor calculado na amostra) é denominada erro amostral. A estatística probabilística permite estimar a magnitude provável desse erro, desde que a seleção da amostra siga critérios aleatórios.
                </Paragraph>

                <HeadingThree>2.2. Amostragem Probabilística (Aleatória)</HeadingThree>

                <Paragraph>
                    A amostragem probabilística é caracterizada pelo rigor científico e pela objetividade. Nela, a seleção dos elementos é feita através de sorteio não viciado, garantindo que cada unidade da população tenha uma probabilidade conhecida e diferente de zero de pertencer à amostra. Este método é o único que permite o uso legítimo da inferência estatística para calcular intervalos de confiança e margens de erro.
                </Paragraph>

                <HeadingThree>2.3. Amostragem Não Probabilística</HeadingThree>

                <Paragraph>
                    Nos métodos não probabilísticos, a probabilidade de seleção de cada elemento é desconhecida, impossibilitando o cálculo formal do erro amostral. A inferência estatística clássica não se aplica rigorosamente aqui, mas estes métodos são amplamente usados em pesquisas exploratórias, qualitativas ou quando restrições orçamentárias impedem a aleatoriedade.
                </Paragraph>

                <Paragraph>
                    <ul className="list-disc list-inside">
                        <li><strong>Amostragem por Conveniência</strong>: A seleção é ditada pela facilidade de acesso. Exemplos incluem testes clínicos com voluntários ou pesquisas de opinião com transeuntes em um shopping. O viés de autoseleção é alto.</li>
                        <li><strong>Amostragem Intencional (Julgamento)</strong>: O pesquisador seleciona elementos que julga serem representativos ou possuírem informações críticas. Comum em estudos de caso e auditorias, onde se buscam transações específicas &quot;de risco&quot;.</li>
                        <li><strong>Amostragem por Cotas</strong>: Frequentemente confundida com a estratificada. A população é segmentada (ex: sexo, idade), e define-se uma cota de entrevistas para cada segmento (ex: 50 homens e 50 mulheres). A diferença crucial é que, dentro de cada cota, a seleção não é aleatória; o entrevistador escolhe quem entrevistar até preencher a cota. Isso introduz viés, pois o entrevistador tenderá a selecionar pessoas mais acessíveis ou amigáveis.</li>
                    </ul>
                </Paragraph>

                <SubTitle>3. Organização de Dados: Distribuições de Frequências</SubTitle>

                <Paragraph>
                    A coleta de dados resulta, inicialmente, em uma massa de valores desordenados. Para extrair sentido, o primeiro passo da Estatística Descritiva é a organização. O arranjo dos dados em ordem crescente ou decrescente gera o Rol, que já permite identificar os valores extremos (mínimo e máximo). No entanto, para grandes conjuntos de dados, o <strong>Rol</strong> é insuficiente, sendo necessária a condensação em <strong>Distribuições de Frequências</strong>.
                </Paragraph>

                <HeadingThree>3.1. Construção e Estrutura das Tabelas</HeadingThree>

                <Paragraph>
                    Uma distribuição de frequência é um resumo tabular que organiza os dados em classes (categorias ou intervalos numéricos) e registra quantas observações caem em cada classe.
                </Paragraph>

                <Paragraph>
                    <strong>Componentes da Tabela:</strong>
                </Paragraph>

                <Paragraph>
                    <ul className="list-disc list-inside">
                        <li><strong>Classe (i):</strong> O intervalo ou categoria. </li>
                        <li><strong>Frequência Absoluta (fi):</strong> Contagem direta de observações na classe.</li>
                        <li><strong>Frequência Relativa (fri):</strong> A proporção da classe no todo, calculada por fri = fi / n. Essencial para comparações entre amostras de tamanhos diferentes.</li>
                        <li><strong>Frequência Acumulada (Fi):</strong> A soma das frequências da classe atual com todas as anteriores (Fi = f1 + f2 + f3 + … + fn). Útil para determinar quantis e posições (ex: &quot;quantos alunos tiraram nota abaixo de 7?&quot;)</li>
                    </ul>
                </Paragraph>

                <HeadingThree>3.2. Dados Agrupados em Classes</HeadingThree>

                <Paragraph>
                    Quando a variável é contínua (ex: altura, renda) ou discreta com muitos valores distintos, a tabulação valor por valor é ineficiente. Agrupam-se os dados em intervalos.
                </Paragraph>

                <Paragraph>
                    <strong>Determinação das Classes:</strong>
                </Paragraph>

                <Paragraph>
                    <ul className="list-disc list-inside">
                        <li>Calcula-se a <strong>Amplitude Total (AT):</strong> X<sub>(max)</sub> - X<sub>(min)</sub>.</li>
                        <li>Define-se o número de classes (n). A <strong>Regra de Sturges</strong> é uma diretriz comum: <em>n = 1 + 3.3log(N)</em>.</li>
                        <li>Calcula-se a <strong>Amplitude do Intervalo de Classe (Ai):</strong> AT / n.</li>
                        <li><strong>Ponto Médio (xi):</strong> Para fins de cálculo de médias e desvios em dados agrupados, assume-se que todas as observações de uma classe estão concentradas no seu ponto médio (média entre o limite inferior e superior da classe). Esta suposição simplificadora permite o processamento estatístico, introduzindo um erro de agrupamento geralmente negligenciável.</li>
                    </ul>
                </Paragraph>

                <SubTitle>4. Medidas de Tendência Central</SubTitle>

                <Paragraph>
                    <strong>Média Ponderada:</strong> Em situações onde as observações têm importâncias relativas distintas (pesos), utiliza-se a média ponderada.
                </Paragraph>

                <Paragraph>
                    Um exemplo clássico é o cálculo do Índice de Preços ao Consumidor (IPC), onde cada item tem um peso diferente no orçamento familiar.
                </Paragraph>

                <SubTitle>5. Medidas de Dispersão</SubTitle>

                <Paragraph>
                    As medidas de tendência central informam onde os dados estão centrados, mas nada dizem sobre como eles se distribuem ao redor desse centro. Duas cidades podem ter a mesma temperatura média anual de 25°C, mas uma ter clima constante (variação de 20°C a 30°C) e a outra extremo (variação de -10°C a 60°C). As medidas de dispersão quantificam essa variabilidade, sendo vitais para avaliar a confiabilidade da média e a homogeneidade da população.
                </Paragraph>

                <HeadingThree>5.1. Amplitude Total (Range)</HeadingThree>

                <Paragraph>
                    É a medida mais elementar, definida pela diferença entre o valor máximo e o mínimo: <em>AT = X<sub>(max)</sub> - X<sub>(min)</sub></em>.
                </Paragraph>

                <HeadingThree>5.2. Variância (σ²)</HeadingThree>

                <Paragraph>
                    A variância supera a limitação da amplitude ao considerar todos os dados. Ela mede a média dos quadrados dos desvios de cada observação em relação à média aritmética. Elevar ao quadrado cumpre duas funções: elimina o sinal negativo dos desvios (evitando que a soma seja zero) e penaliza desvios maiores (dá mais peso a valores distantes da média).
                </Paragraph>

                <Paragraph>
                    <strong>Variância Populacional:</strong> Calculada para toda a população. <br />
                    <strong>Variância Amostral (s²):</strong> Calculada para uma amostra da população.
                </Paragraph>

                <HeadingThree>5.3. Desvio Padrão (σ)</HeadingThree>

                <Paragraph>
                    Embora matematicamente robusta, a variância tem uma desvantagem prática: sua unidade é o quadrado da unidade original. O <strong>Desvio Padrão</strong> resolve isso sendo a raiz quadrada da variância, retornando a medida para a escala original dos dados.
                </Paragraph>

                <HeadingThree>5.4. Coeficiente de Variação (CV)</HeadingThree>

                <Paragraph>
                    O desvio padrão é uma medida absoluta. Para comparar a variabilidade de fenômenos com magnitudes ou unidades diferentes (ex: variabilidade de peso de elefantes vs. variabilidade de peso de formigas, ou variabilidade de altura em metros vs. peso em kg), usa-se o <strong>Coeficiente de Variação.</strong>
                </Paragraph>

                <Paragraph>
                    <strong>Utilidade:</strong> Expressa a dispersão como uma porcentagem da média (variabilidade relativa). Permite concluir, por exemplo, que embora o desvio padrão do peso dos elefantes seja maior em kg, a variabilidade relativa (CV) do peso das formigas pode ser superior, indicando um grupo mais heterogêneo.
                </Paragraph>

                <SubTitle>6. Probabilidade e Distribuições Teóricas</SubTitle>

                <Paragraph>
                    A teoria da probabilidade fornece a base axiomática para a inferência estatística. Enquanto a estatística descritiva analisa dados passados, a probabilidade modela a incerteza de eventos futuros. Ela opera a transição do mundo real (amostra) para o modelo teórico (população).
                </Paragraph>

                <HeadingThree>6.1. Fundamentos da Probabilidade</HeadingThree>

                <Paragraph>
                    <ul className="list-disc list-inside">
                        <li><strong>Experimento Aleatório (Ω):</strong> Um processo que, repetido sob as mesmas condições, produz resultados imprevisíveis (ex: lançar um dado).</li>
                        <li><strong>Espaço Amostral (S):</strong> O conjunto de todos os resultados possíveis de um experimento.</li>
                        <li><strong>Evento (E):</strong> Qualquer subconjunto do espaço amostral.</li>
                        <li><strong>Definição Clássica (Laplace):</strong> Se um experimento tem <em>n</em> resultados igualmente prováveis, a probabilidade de um evento <em>A</em> com <em>k</em> resultados favoráveis é <em>P(A) = k/n</em>.</li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <strong>Conceitos de Associação:</strong>
                </Paragraph>

                <Paragraph>
                    <ul className="list-disc list-inside">
                        <li><strong>Eventos Mutuamente Excludentes:</strong> A ocorrência de um impede a do outro: <em>P(A∩B)=0</em></li>
                        <li><strong>Eventos Independentes:</strong> A ocorrência de um não altera a probabilidade do outro: <em>P(A∣B)=P(A)</em>. A probabilidade conjunta é o produto das probabilidades marginais: <em>P(A∩B)=P(A)⋅P(B)</em></li>
                    </ul>
                </Paragraph>

                <HeadingThree>6.2. Variáveis Aleatórias e Distribuições de Probabilidade</HeadingThree>

                <Paragraph>
                    Uma variável aleatória é uma função que associa um número real a cada resultado do espaço amostral. Dependendo da natureza dos valores, ela pode ser Discreta (valores contáveis) ou Contínua (valores em um intervalo real). Cada tipo possui distribuições teóricas associadas que modelam o comportamento dos dados.
                </Paragraph>

                <HeadingThree>6.3. Variáveis Aleatórias e Distribuições de Probabilidade</HeadingThree>

                <HeadingFour>6.3.1. Distribuição Binomial</HeadingFour>

                <Paragraph>
                    Modela situações de &quot;sucesso ou fracasso&quot; em tentativas repetidas.
                </Paragraph>

                <Paragraph>
                    <strong>Condições (Processo de Bernoulli):</strong>
                </Paragraph>

                <Paragraph>
                    <ul className="list-disc list-inside">
                        <li>O experimento consiste em <em>n</em> tentativas fixas.</li>
                        <li>As tentativas são independentes.</li>
                        <li>Cada tentativa tem apenas dois resultados: Sucesso ou Fracasso.</li>
                        <li>A probabilidade de sucesso (P) é constante.</li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <strong>Aplicações:</strong> Controle de qualidade (número de peças defeituosas em um lote de 100), pesquisas eleitorais (número de votos para candidato A em uma amostra de 2000).19
                </Paragraph>

                <Paragraph>
                    <strong>Propriedades:</strong> Média: <em>μ=n⋅p</em>; Variância: <em>σ²=n⋅p⋅(1−p)</em>.
                </Paragraph>

                <HeadingFour>6.3.2. Distribuição de Poisson</HeadingFour>

                <Paragraph>
                    Modela a ocorrência de eventos raros ou aleatórios em um contínuo (tempo, área, volume). É frequentemente derivada da Binomial quando n→∞ e p→0, mantendo a média constante.
                </Paragraph>

                <Paragraph>
                    <strong>Parâmetro:</strong> Lambda (λ), a taxa média de ocorrência no intervalo considerado.
                </Paragraph>

                <Paragraph>
                    <strong>Aplicações:</strong> Número de chamadas em um call center por minuto, número de acidentes de trabalho por mês, número de bactérias por ml de solução. Uma característica única da Poisson é que sua média é igual à sua variância <em>(μ = σ² = λ)</em>.
                </Paragraph>

                <HeadingThree>6.4. Distribuições Contínuas: A Distribuição Normal</HeadingThree>

                <Paragraph>
                    A Distribuição Normal (ou Gaussiana) é a pedra angular da estatística. Inúmeros fenômenos naturais (altura, erros de medida, pressão sanguínea) seguem este padrão.
                </Paragraph>

                <Paragraph>
                    <strong>Características da Curva Normal:</strong>
                </Paragraph>

                <Paragraph>
                    <ul className="list-disc list-inside">
                        <li>Forma de sino, simétrica e unimodal.</li>
                        <li>Assintótica em relação ao eixo horizontal (jamais toca o zero).</li>
                        <li>Definida inteiramente por dois parâmetros: Média (μ) e Desvio Padrão (σ). A média define a posição central; o desvio padrão define a largura (achatamento).</li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Distribuição Normal Padrão (Z): Para calcular probabilidades, transformamos qualquer normal <em>X∼N(μ,σ²)</em> na normal padrão <em> Z ~ N(0, 1) </em> através da padronização.
                </Paragraph>

                <Paragraph>
                    O valor Z (score Z) representa quantos desvios padrão o valor X está distante da média. Tabelas de probabilidade Z permitem calcular áreas sob a curva.
                </Paragraph>
            </article>
        </DefaultHomeLayout>
    )
}