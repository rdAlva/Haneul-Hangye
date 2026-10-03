import { useEffect, useState } from "react";
import { supabase } from "../db/supabase";
import Navbar from "../components/NavBar";
import "./Vocabulary.css";
import plus from "../assets/plus.png";
import HangulCharacter from "../components/HangulCharacter";

function Vocabulary() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

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
      value: "a"
    },
    {
      label: "ㅑ",
      value: "ya"
    },
    {
      label: "ㅓ",
      value: "eo"
    },
    {
      label: "ㅕ",
      value: "yeo"
    },
    {
      label: "ㅗ",
      value: "o"
    },
    {
      label: "ㅛ",
      value: "yo"
    },
    {
      label: "ㅜ",
      value: "u"
    },
    {
      label: "ㅠ",
      value: "yu"
    },
    {
      label: "ㅡ",
      value: "eu"
    },
    {
      label: "ㅣ",
      value: "i"
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="vocabulary">
        <div className="vocabulary-header">
          <h1>Vocabulary</h1>
          <div
            className="vocabulary-header-right"
            // onClick={() => setIsAddSessionOpen(true)}
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
          <label>Hangul - Vowels (모음)  </label>
          <div className="vowels-box">
            {vowels.map((vowel, index) => (
              <HangulCharacter
                key={index}
                label={vowel.label}
                value={vowel.value}
              />
            ))}
          </div>
        </div>
        {/* {isAddSessionOpen && (
          <AddSession
            isOpen={isAddSessionOpen}
            onClose={setIsAddSessionOpen}
            userId={user?.id}
            onConfirm={() => fetchData()}
          />
        )} */}
      </main>
    </div>
  );
}

export default Vocabulary;
