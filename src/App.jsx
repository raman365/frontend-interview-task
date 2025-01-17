import { useState } from "react";
import ModalDialog from "./ModalDialog";

function App() {
  const title = useState("Modal Dialog");

  return (
    <>
      <ModalDialog title={title}>
        Ayrton Senna da Silva (21 March 1960 - 1 May 1994) was a Brazilian
        racing driver, who competed in Formula One from 1984 to 1994. Senna won
        three Formula One World Drivers' Championship titles with McLaren, and —
        at the time of his death — held the record for most pole positions (65).
        He won 41 Grands Prix across 11 seasons, and is universally recognized
        as one of the best F1 drivers of all time.
      </ModalDialog>
    </>
  );
}

export default App;
