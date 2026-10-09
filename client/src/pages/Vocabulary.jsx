import { useEffect, useState } from "react";
import { supabase } from "../db/supabase";
import Navbar from "../components/NavBar";
import "./Vocabulary.css";
import plus from "../assets/plus.png";
import HangulCharacter from "../components/HangulCharacter";
import VocabCategory from "../components/VocabCateg";
import VocabularyTable from "../components/VocabTable";
import AddVocab from "../components/AddVocab";
import EditVocab from "../components/EditVocab";

function Vocabulary() {
  const [user, setUser] = useState(null);
  const [words, setWords] = useState([]);
  const [isAddVocabOpen, setIsAddVocabOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isEditVocabOpen, setIsEditVocabOpen] = useState(false);
  const [editingVocab, setEditingVocab] = useState(null);

  const fetchVocab = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("vocabulary_words")
      .select("*")
      .eq("user_id", user?.id);

    if (error) {
      console.error("Error fetching vocabulary", error.message);
    } else {
      setWords(data ?? []);
    }
  };
  const handleDelete = async (wordId) => {
    const { error } = await supabase
      .from("vocabulary_words")
      .delete()
      .eq("id", wordId)
      .eq("user_id", user?.id);

    if (error) {
      console.error("Error deleting vocabulary:", error.message);
      return;
    }

    fetchVocab();
  };
  const handleEdit = (word) => {
    setEditingVocab(word);
    setIsEditVocabOpen(true);
  };
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    fetchVocab();
  }, [user]);

  const consonants = [
    {
      label: "ㄱ",
      value: "g/k",
    },
    {
      label: "ㄴ",
      value: "n",
    },
    {
      label: "ㄷ",
      value: "d/t",
    },
    {
      label: "ㄹ",
      value: "r/l",
    },
    {
      label: "ㅁ",
      value: "m",
    },
    {
      label: "ㅂ",
      value: "b/p",
    },
    {
      label: "ㅅ",
      value: "s",
    },
    {
      label: "ㅇ",
      value: "ng",
    },
    {
      label: "ㅈ",
      value: "j",
    },
    {
      label: "ㅊ",
      value: "ch",
    },
    {
      label: "ㅋ",
      value: "k",
    },
    {
      label: "ㅌ",
      value: "t",
    },
    {
      label: "ㅍ",
      value: "p",
    },
    {
      label: "ㅎ",
      value: "h",
    },
  ];

  const vowels = [
    {
      label: "ㅏ",
      value: "a",
    },
    {
      label: "ㅑ",
      value: "ya",
    },
    {
      label: "ㅓ",
      value: "eo",
    },
    {
      label: "ㅕ",
      value: "yeo",
    },
    {
      label: "ㅗ",
      value: "o",
    },
    {
      label: "ㅛ",
      value: "yo",
    },
    {
      label: "ㅜ",
      value: "u",
    },
    {
      label: "ㅠ",
      value: "yu",
    },
    {
      label: "ㅡ",
      value: "eu",
    },
    {
      label: "ㅣ",
      value: "i",
    },
  ];

  const categories = [
    {
      label: "All",
    },
    {
      label: "Nouns",
    },
    {
      label: "Verbs",
    },
    {
      label: "Adjectives",
    },
    {
      label: "Adverbs",
    },
    {
      label: "Phrases",
    },
    {
      label: "Numbers",
    },
    {
      label: "Other",
    },
  ];
  const filteredWords =
    selectedCategory === "All"
      ? words
      : words.filter((word) => word.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <main className="vocabulary">
        <div className="vocabulary-header">
          <h1>Vocabulary</h1>
          <div
            className="vocabulary-header-right"
            onClick={() => setIsAddVocabOpen(true)}
          >
            <img className="plus-sign" src={plus} alt="Plus sign" />
            <h1 className="add-word">Add Word</h1>
          </div>
        </div>
        <div className="vocab-box">
          <label>Hangul - Consonants (자음) </label>
          <div className="consonants-box">
            {consonants.map((consonant, index) => (
              <HangulCharacter
                key={index}
                label={consonant.label}
                value={consonant.value}
              />
            ))}
          </div>
          <label>Hangul - Vowels (모음) </label>
          <div className="vowels-box">
            {vowels.map((vowel, index) => (
              <HangulCharacter
                key={index}
                label={vowel.label}
                value={vowel.value}
              />
            ))}
          </div>
          <label>Your words</label>
          <div className="category-box">
            {categories.map((category, index) => (
              <VocabCategory
                key={index}
                label={category.label}
                onClick={() => setSelectedCategory(category.label)}
              />
            ))}
          </div>
          <div className="vocab-table-box">
            <VocabularyTable
              words={filteredWords}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </div>
        </div>
        {isAddVocabOpen && (
          <AddVocab
            isOpen={isAddVocabOpen}
            onClose={setIsAddVocabOpen}
            userId={user?.id}
            onConfirm={fetchVocab}
          />
        )}
        {isEditVocabOpen && (
          <EditVocab
            isOpen={isEditVocabOpen}
            onClose={() => {
              setIsEditVocabOpen(false);
              setEditingVocab(null);
            }}
            userId={user?.id}
            vocabWord={editingVocab}
            onConfirm={fetchVocab}
          />
        )}
      </main>
    </div>
  );
}

export default Vocabulary;
