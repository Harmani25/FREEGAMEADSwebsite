
import { useState } from "react";
import { ReviewForm } from "./Forms";
import { GameUpdateForm } from "./Forms";


function FormPage() {
  const [view, setView] = useState("Review");
  return (
    <div className="FormPage" id="Formpage">
      <nav>
        <h3
          onClick={() => setView("Review")}
          style={{ color: view === "Review" ? "#fff" : "" }}
        >
          Review
        </h3>
        <h3
          onClick={() => setView("Gameupdates")}
          style={{ color: view === "Gameupdates" ? "" : "" }}
        >
          Game Updates
        </h3>
      </nav>
      {view === "Review" ? <ReviewForm /> : <GameUpdateForm />}
    </div>
  );
}

export default FormPage;