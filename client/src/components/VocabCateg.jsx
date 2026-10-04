import './VocabCateg.css'
function VocabCategory({label, onClick}) {
  return (
    <div className="vocab-category" onClick={onClick}>
      <span className="vocab-category-label">{label}</span>
    </div>
  )
}

export default VocabCategory