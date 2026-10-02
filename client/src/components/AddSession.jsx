import "./AddSession.css";
import React, { useState } from "react";
import { supabase } from "../db/supabase"

function AddSession({ isOpen, onClose, onConfirm, userId }) {
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const handleConfirm = async () => {
    if (!activityType || !duration || !date) {
      alert("Please fill in Activity Type, Duration, and Date.");
      return;
    }

    const { error } = await supabase.from("study_sessions").insert({
      user_id: userId,
      activity_type: activityType,
      duration_minutes: parseInt(duration, 10),
      session_date: date,
      notes: notes || null,
    });

    if (error) {
      console.error("Error saving session:", error.message);
      return;
    }

    onClose(false);
    onConfirm();
  };

  return (
    <div className="add-modal-background">
      <div className="add-modal-container">
        <div className="close-btn">
          <button onClick={() => onClose(false)}> X </button>
        </div>
        <div className="title">
          <p>Log a Session</p>
        </div>
        <div className="body">
          <div className="activity-type">
            <label>Activity Type</label>
            <br />
            <select
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
            >
              <option value="">Select Activity Type</option>
              <option value="Listening">Listening</option>
              <option value="Vocabulary">Vocabulary</option>
              <option value="Hangul Characters">Hangul Characters</option>
              <option value="Speaking">Speaking</option>
              <option value="Reading">Reading</option>
              <option value="Writing">Writing</option>
            </select>
          </div>
          <div className="duration_Date">
            <div className="duration">
              <label>Duration</label>
              <br />
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="date">
              <label>Date</label>
              <br />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="notes">
            <label>Notes</label>
            <br />
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
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
export default AddSession;
