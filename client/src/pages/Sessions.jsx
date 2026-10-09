import { useEffect, useState } from "react";
import { supabase } from "../db/supabase";
import Navbar from "../components/NavBar";
import SessionItems from "../components/SessionItems";
import AddSession from "../components/AddSession";
import EditSession from "../components/EditSession";
import "./Sessions.css";
import plus from "../assets/plus.png";
import bin from "../assets/bin.png";
import edit from "../assets/edit.png";

function Sessions() {
  const [recentSessions, setRecentSessions] = useState([]);
  const [user, setUser] = useState(null);
  const [isAddSessionOpen, setIsAddSessionOpen] = useState(false);
  const [isEditSessionOpen, setIsEditSessionOpen] = useState(false);
  const [editingSession, setEditingSession] = useState(null);

  const fetchData = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const currentUser = session?.user;
    setUser(currentUser);

    if (!currentUser) return;

    const { data: sessions, error: sessionError } = await supabase
      .from("study_sessions")
      .select("duration_minutes")
      .eq("user_id", currentUser.id);

    console.log("Sessions:", sessions);
    console.log("Session error:", sessionError);

    const totalMinutes =
      sessions?.reduce((sum, s) => sum + s.duration_minutes, 0) ?? 0;

    const { data: recentData } = await supabase
      .from("study_sessions")
      .select("id, activity_type, duration_minutes, session_date, notes")
      .eq("user_id", currentUser.id)
      .order("session_date", { ascending: false });

    setRecentSessions(recentData ?? []);
  };
  const handleDelete = async (sessionId) => {
    const { error } = await supabase
      .from("study_sessions")
      .delete()
      .eq("id", sessionId)
      .eq("user_id", user?.id);

    if (error) {
      console.error("Error deleting session:", error.message);
      return;
    }

    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  const today = new Date();

  const startOfWeek = new Date(today);
  const day = today.getDay();

  startOfWeek.setDate(today.getDate() - day);
  startOfWeek.setHours(0, 0, 0, 0);

  const thisWeekSessions = recentSessions.filter((session) => {
    const sessionDate = new Date(session.session_date);
    return sessionDate >= startOfWeek;
  });

  const earlierSessions = recentSessions.filter((session) => {
    const sessionDate = new Date(session.session_date);
    return sessionDate < startOfWeek;
  });

  return (
    <div>
      <Navbar />
      <main className="sessions">
        <div className="sessions-header">
          <h1>Good day, Learner</h1>
          <div
            className="sessions-header-right"
            onClick={() => setIsAddSessionOpen(true)}
          >
            <img className="plus-sign" src={plus} alt="Plus sign" />
            <h1 className="log-sessions">Log sessions</h1>
          </div>
        </div>
        <div className="sessions-box">
          <div className="recent-sessions">
            <h2>Recent Sessions</h2>

            <div className="session-list">
              {thisWeekSessions.length > 0 && (
                <>
                  <h3 className="session-group-title">This week</h3>

                  {thisWeekSessions.map((session) => (
                    <div className="session-row" key={session.id}>
                      <SessionItems
                        activityType={session.activity_type}
                        duration={session.duration_minutes}
                        date={session.session_date}
                        notes={session.notes}
                      />
                      <img
                        className="session-edit"
                        src={edit}
                        alt="edit sign"
                        onClick={() => {
                          setIsEditSessionOpen(true);
                          setEditingSession(session);
                        }}
                      />
                      <img
                        className="session-bin"
                        src={bin}
                        alt="Bin sign"
                        onClick={() => handleDelete(session.id)}
                      />
                    </div>
                  ))}
                </>
              )}

              {earlierSessions.length > 0 && (
                <>
                  <h3 className="session-group-title">Earlier</h3>

                  {earlierSessions.map((session) => (
                    <div className="session-row" key={session.id}>
                      <SessionItems
                        activityType={session.activity_type}
                        duration={session.duration_minutes}
                        date={session.session_date}
                        notes={session.notes}
                      />
                      <img
                        className="session-edit"
                        src={edit}
                        alt="edit sign"
                        onClick={() => {
                          setIsEditSessionOpen(true);
                          setEditingSession(session);
                        }}
                      />

                      <img
                        className="session-bin"
                        src={bin}
                        alt="Bin sign"
                        onClick={() => handleDelete(session.id)}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        {isAddSessionOpen && (
          <AddSession
            isOpen={isAddSessionOpen}
            onClose={setIsAddSessionOpen}
            userId={user?.id}
            onConfirm={() => fetchData()}
          />
        )}
        {isEditSessionOpen && (
          <EditSession
            isOpen={isEditSessionOpen}
            onClose={setIsEditSessionOpen}
            onConfirm={() => fetchData()}
            userId={user?.id}
            session={editingSession}
          />
        )}
      </main>
    </div>
  );
}

export default Sessions;
