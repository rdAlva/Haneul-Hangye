import './HangulCharacter.css'
function HangulCharacter({ label, value }) {
  return (
    <div className="hangul-character">
      <span className="character-label">{label}</span>
      <span className="character-value">{value}</span>
    </div>
  )
}

export default HangulCharacter