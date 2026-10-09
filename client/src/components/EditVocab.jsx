import "./EditVocab.css";
import React, { useEffect, useState } from "react";
import { supabase } from "../db/supabase";

function EditVocab({ isOpen, onClose, onConfirm, userId, vocabWord }) {
  const [word, setWord] = useState("");
  const [romanization, setRomanization] = useState("");
  const [meaning, setMeaning] = useState("");
  const [category, setCategory] = useState("Other");
  const [status, setStatus] = useState("Learning");

  useEffect(() => {
    if (vocabWord) {
      setWord(vocabWord.korean_word || "");
      setRomanization(vocabWord.romanization || "");
      setMeaning(vocabWord.meaning || "");
      setCategory(vocabWord.category || "Other");
      setStatus(vocabWord.status || "Learning");
    }
  }, [vocabWord]);

  const handleConfirm = async () => {
    if (!word.trim() || !romanization.trim() || !meaning.trim()) {
      alert("Please fill in Korean word, Romanization, and Meaning.");
      return;
    }

    if (!vocabWord?.id || !userId) {
      console.error("Missing vocabulary ID or user ID.");
      return;
    }

    const { error } = await supabase
      .from("vocabulary_words")
      .update({
        korean_word: word.trim(),
        romanization: romanization.trim(),
        meaning: meaning.trim(),
        category,
        status,
      })
      .eq("id", vocabWord.id)
      .eq("user_id", userId);

    if (error) {
      console.error("Error updating vocabulary:", error.message);
      return;
    }

    onClose(false);
    onConfirm();
  };
  if (!isOpen || !vocabWord) return null;
  return (
    <div className="add-modal-background">
      <div className="add-modal-container">
        <div className="close-btn">
          <button onClick={() => onClose(false)}> X </button>
        </div>
        <div className="title">
          <p>Edit Word</p>
        </div>
        <div className="body">
          <div className="word">
            <label>Korean word</label>
            <input
              type="text"
              placeholder="e.g. 사랑"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </div>

          <div className="romanization">
            <label>Romanization</label>
            <input
              type="text"
              placeholder="e.g. Sarang"
              value={romanization}
              onChange={(e) => setRomanization(e.target.value)}
            />
          </div>

          <div className="category">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Nouns">Nouns</option>
              <option value="Verbs">Verbs</option>
              <option value="Adjectives">Adjectives</option>
              <option value="Adverbs">Adverbs</option>
              <option value="Phrases">Phrases</option>
              <option value="Numbers">Numbers</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="meaning">
            <label>Meaning</label>
            <input
              type="text"
              placeholder="e.g. Love"
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
            />
          </div>

          <div className="status">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Learning">Learning</option>
              <option value="Practiced">Practiced</option>
              <option value="Mastered">Mastered</option>
            </select>
          </div>
        </div>
        <div className="footer">
          <button onClick={() => onClose(false)}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
export default EditVocab;
