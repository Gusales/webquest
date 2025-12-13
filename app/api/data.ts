import { SubjectsData, VideoData, } from "@/src/shared/types";

export const videosData: Record<SubjectsData, VideoData[]> = {
    'calculo': [
        { id: 1, title: 'Introdução ao Cálculo Diferencial', youtubeId: 'WUvTyaaNkzM', notes: 'Conceitos fundamentais de limite e derivada. A derivada representa a taxa de variação instantânea. Aplicações em física e geometria.' },
        { id: 2, title: 'Limites e Continuidade', youtubeId: 'riXcZT2ICjA', notes: 'Definição formal de limite. Propriedades dos limites. Limites laterais e continuidade de funções.' },
        { id: 3, title: 'Derivadas - Regras Básicas', youtubeId: 'S0_qX4VJhMQ', notes: 'Regra da potência, regra do produto e regra do quociente. Derivadas de funções trigonométricas.' },
        { id: 4, title: 'Regra da Cadeia', youtubeId: 'H-ybCx8gt-8', notes: 'Conceito de função composta. Como aplicar a regra da cadeia. Exemplos práticos.' },
        { id: 5, title: 'Aplicações de Derivadas', youtubeId: '8XVMoByIHtU', notes: 'Problemas de otimização. Taxas relacionadas. Análise de gráficos de funções.' },
        { id: 6, title: 'Integral Indefinida', youtubeId: 'rfG8ce4nNh0', notes: 'Primitivas e antiderivadas. Propriedades da integração. Integrais imediatas.' },
        { id: 7, title: 'Técnicas de Integração', youtubeId: 'lAVB7JhkTnY', notes: 'Integração por substituição. Integração por partes. Frações parciais.' },
        { id: 8, title: 'Integral Definida', youtubeId: 'ty8xL6S3fws', notes: 'Teorema fundamental do cálculo. Cálculo de áreas. Propriedades da integral definida.' },
        { id: 9, title: 'Aplicações de Integrais', youtubeId: 'MmB82tSLMGc', notes: 'Cálculo de volumes. Comprimento de arco. Aplicações em física.' },
        { id: 10, title: 'Séries e Sequências', youtubeId: 'uXoh6vi6J5U', notes: 'Definição de sequências. Convergência de séries. Séries de potências.' }
    ],
    'estatistica-aplicada': [
        { id: 1, title: 'Introdução à Estatística', youtubeId: 's_cz9_R3hhk', notes: 'Conceitos básicos de estatística descritiva. População e amostra. Tipos de variáveis.' },
        { id: 2, title: 'Medidas de Tendência Central', youtubeId: 'tuzbYoeum7E', notes: 'Média, mediana e moda. Quando utilizar cada medida. Exemplos práticos.' },
        { id: 3, title: 'Medidas de Dispersão', youtubeId: 'E4HAYd0QnRc', notes: 'Variância e desvio padrão. Amplitude e coeficiente de variação. Interpretação dos resultados.' },
        { id: 4, title: 'Probabilidade Básica', youtubeId: '_OUzM0LVtsY', notes: 'Conceitos fundamentais de probabilidade. Espaço amostral e eventos. Probabilidade condicional.' },
        { id: 5, title: 'Distribuições de Probabilidade', youtubeId: 'xxpc-HPKN28', notes: 'Distribuição binomial. Distribuição de Poisson. Distribuição normal.' },
        { id: 6, title: 'Distribuição Normal', youtubeId: 'iYiOVISWXS4', notes: 'Características da distribuição normal. Tabela Z. Cálculo de probabilidades.' },
        { id: 7, title: 'Amostragem', youtubeId: 'bT1p5tJwn_0', notes: 'Tipos de amostragem. Amostragem aleatória simples. Tamanho da amostra.' },
        { id: 8, title: 'Regressão Linear', youtubeId: 'zPG4NjIkCjc', notes: 'Correlação entre variáveis. Equação da reta de regressão. Coeficiente de determinação R².' }
    ],
    'programacao-linear': [
        { id: 1, title: 'Introdução à Programação Linear', youtubeId: 'M4K6HYLHREQ', notes: 'Conceitos básicos de otimização. Função objetivo e restrições. Região viável.' },
        { id: 2, title: 'Método Gráfico', youtubeId: 'pJxGmOmHe8Y', notes: 'Resolução gráfica de problemas com 2 variáveis. Identificação do ponto ótimo. Vértices da região viável.' },
        { id: 3, title: 'Formulação de Problemas', youtubeId: 'cwM1BD7TxXY', notes: 'Como modelar problemas reais. Definição de variáveis de decisão. Construção de restrições.' },
        { id: 4, title: 'Método Simplex - Parte 1', youtubeId: '2ACJ9ewUC6U', notes: 'Introdução ao algoritmo Simplex. Forma padrão. Variáveis de folga.' },
        { id: 5, title: 'Método Simplex - Parte 2', youtubeId: 'Ej7dt-fKGjU', notes: 'Tableau Simplex. Iterações do método. Critério de parada.' },
        { id: 6, title: 'Dualidade', youtubeId: 'jjJiJqDWCco', notes: 'Problema primal e dual. Teoremas da dualidade. Interpretação econômica.' },
        { id: 7, title: 'Análise de Sensibilidade', youtubeId: 'H3FEV8U0Hqk', notes: 'Variação nos coeficientes. Preços sombra. Intervalo de otimalidade.' },
        { id: 8, title: 'Problemas de Transporte', youtubeId: 'YxkvR-KLBfI', notes: 'Modelagem de problemas de transporte. Método de Vogel. Otimização de rotas.' },
        { id: 9, title: 'Problemas de Designação', youtubeId: 'cQ48rP_Rs4g', notes: 'Método Húngaro. Alocação ótima de recursos. Aplicações práticas.' },
        { id: 10, title: 'Aplicações em Logística', youtubeId: 'tebSyXQiwdU', notes: 'Otimização de cadeia de suprimentos. Planejamento de produção. Estudos de caso.' }
    ]
};