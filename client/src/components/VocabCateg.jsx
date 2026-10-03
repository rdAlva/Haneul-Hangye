import './VocabCateg.css'
function VocabCategory({label}) {
  return (
    <div className="vocab-category">
      <span className="vocab-category-label">{label}</span>
    </div>
  )
}

export default VocabCategory