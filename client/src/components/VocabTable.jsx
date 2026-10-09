import "./VocabTable.css";
import bin from "../assets/bin.png";
import edit from "../assets/edit.png";

function VocabularyTable({ words, onDelete, onEdit }) {
  return (
    <div className="vocab-table-container">
      <table className="vocab-table">
        <thead>
          <tr>
            <th>Korean</th>
            <th>Romanization</th>
            <th>Meaning</th>
            <th>Category</th>
            <th>Status</th>
            <th></th>
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
              <td className="vocab-actions">
                 <img
                className="vocab-edit"
                src={edit}
                alt="Edit"
                onClick={() => onEdit(word)}
              />
              <img
                className="vocab-bin"
                src={bin}
                alt="Delete"
                onClick={() => onDelete(word.id)}
              />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VocabularyTable;
