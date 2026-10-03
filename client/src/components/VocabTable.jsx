import "./VocabTable.css";
function VocabularyTable({ words }) {
  return (
      <table className="vocab-table">
        <thead>
          <tr>
            <th>Korean</th>
            <th>Romanization</th>
            <th>Meaning</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <tr key={index}>
              <td>{word.korean_word}</td>
              <td>{word.romanization}</td>
              <td>{word.meaning}</td>
              <td>{word.category}</td>
              <td>{word.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default VocabularyTable;
