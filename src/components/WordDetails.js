import React from 'react';
import { useSelector } from 'react-redux';
import { selectWordDetails } from '../reducers/dictionaryReducer.js';

const WordDetails = () => {
  const wordDetails = useSelector(selectWordDetails);

  // Render the word details
  return (
    <div className="App">
  
      {wordDetails && wordDetails.length > 0 ? (
        <div  >
          {/* Rendering word details */}
          {wordDetails.map((entry, index) => (
            <div key={index}>
                  <h2>Word Details</h2>
                  <div>
                  <h3>{entry.word}</h3>
                  {
                   entry.phonetics.map((e)=>(
                    <div>
                    <audio  src={e.audio} controls/>
                  </div>
                   ))

                  }
                    </div>
            
              {/* Display other word details here */}
              <p>Part of speech: {entry.meanings[0].partOfSpeech}</p>
              {/* Render definitions, synonyms, antonyms, etc. */}
              {entry.meanings.map((meaning, meaningIndex) => (
                <div key={meaningIndex}>
                  <h4>{meaning.partOfSpeech}</h4>
                  <ul>
                    {meaning.definitions.map((definition, defIndex) => (
                      <li key={defIndex}>
                        <strong>Definition:</strong> {definition.definition} <br />
                        {definition.example && (
                          <>
                            <strong>Example:</strong> {definition.example} <br />
                          </>
                        )}
                        {/* Render synonyms, antonyms, or other details */}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (<>
        <h1>Welcome To My Dictionary App!</h1>
       <p> You can start by entering a word in the search bar and clicking on search!</p>
      </>
      
      )}
    </div>
  );
};

export default WordDetails;
