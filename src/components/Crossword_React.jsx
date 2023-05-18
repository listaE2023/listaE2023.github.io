import React, { useEffect, useState} from 'react';

export default function MyCrossword() {
  const [isClient, setIsClient] = useState(false);
  const [Crossword, setCrossword] = useState(null);
  const [userInput, setUserInput] = useState([]);

  useEffect(() => {
    setIsClient(true); // Set the 'isClient' state to true after the component mounts
    import('@jaredreisinger/react-crossword').then(module => {
      if (module && module.Crossword){
        setCrossword(() => module.Crossword);
 
      }
        
    });
  }, []);

  const theme = { 
    columnBreakpoint: '1000px',
    gridBackground: '#311547',
    cellBackground: '#ffffff',
    cellBorder: '#311547',
    textColor: '#000000',
    numberColor: '#311547',
    focusBackground: '#FFEE70',
    highlightBackground: '#FFF4A3',
  };
 
  const crosswordData = {
    across: {
      1: {
        clue: 'tem longas filas de espera ao almoço',
        answer: 'cantina',
        row: 0,
        col: 16,
      },
      3: {
        clue: 'algo a que todos os estudantes deslocados devem ter direito',
        answer: 'alojamentopublico',
        row: 5,
        col: 6,

    },
    4: {
        clue: 'estudantes que são desproporcionalmente explorados financeiramente ',
        answer: 'internacionais',
        row: 7,
        col: 13,
    },
    7: {
        clue: 'local onde os estudantes se devem exprimir, seja sobre os seus problemas ou as suas ideias',
        answer: 'assembleiageral',
        row: 10,
        col: 7,
    },
    9: {
        clue: 'tradição universitária, que data desde o início do Estado Novo',
        answer: 'lutaestudantil',
        row: 12,
        col: 3,
    },
    10: {
        clue: 'um dos maiores entraves ao acesso universal e gratuito do ensino superior em Portugal',
        answer: 'propina',
        row: 14,
        col: 8,
    },
    11: {
        clue: 'Quando há participação em massa dos estudantes nas Assembleias Gerais e nas ações da Assossiação de Estudantes, diz-se que temos um ensino...',
        answer: 'democratico',
        row: 20,
        col: 7,
    },

    13: {
        clue: 'essencial para um auscultamento fiável das atividades da AEFEUP',
        answer: 'transparencia',
        row: 24,
        col: 8,
    }


  },
    down: {
      2: {
        clue: 'um estudante que tem de conjugar dois tipos de horários e de responsabilidades',
        answer: 'trabalhadorestudante',
        row: 0,
        col: 19,
      },
      5: {
        clue: 'qualidade essencial do ensino superior para que todos se sintam confortaveis na sua instituição',
        answer: 'inclusivo',
        row: 7,
        col: 21,
      },
      6:{
        clue: 'a desintegração destes causou uma degradação no ensino de engenharia na faculdade',
        answer: 'mestradosintegrados',
        row: 9,
        col: 14,
      },
      8:{
        clue: 'um espaço que faz falta aos estudantes em época de exames',
        answer: 'saladeestudo',
        row: 10,
        col: 3,
      },
      12:{
        clue: '24 de ...',
        answer: 'março',
        row: 22,
        col: 9,
      },


    },
  };


  return isClient && Crossword ?
  <div>
    <Crossword theme={theme} 
               acrossLabel={"Horizontal"} 
               downLabel={"Vertical"} 
               data={crosswordData} />
  </div>
   : null;
}