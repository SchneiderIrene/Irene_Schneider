import { useState } from 'react';
import { v4 } from 'uuid';

import {
  ResultContainer,
  CatFactWrapper,
  CatFactsContainer,
  ButtonCat,
} from './styles';
import Spinner from 'components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { SlActionUndo } from 'react-icons/sl';

function CatFacts() {
  const navigate = useNavigate()
  const [catFacts, setCatFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCatFact = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('API Error'), {
          response: result,
        });
      } else {
        setCatFacts((prevValues) => [...prevValues, result.fact]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const catFactsElement = catFacts.map((catFact: string) => {
    return <CatFactWrapper key={v4()}>{catFact}</CatFactWrapper>;
  });

  const deleteCatFacts = (): void => {
    setCatFacts([]);
  };

  return (
    <CatFactsContainer>
      <ButtonCat onClick={()=>navigate("/projects")}> <SlActionUndo/> {" "} Meine Projekte</ButtonCat>
        <ButtonCat onClick={getCatFact}>Get Cat Fact</ButtonCat>
      {isLoading ? <Spinner /> : 
      <ResultContainer isShowBlock={!!catFacts.length}>
        {catFactsElement}
      </ResultContainer>}
      <ButtonCat onClick={deleteCatFacts} disabled={!catFacts.length}>Delete all data</ButtonCat>
      
    </CatFactsContainer>
  );
}

export default CatFacts;
