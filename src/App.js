import "./App.css";
import { useState, useEffect } from "react";
import agendaService from "./services/agenda";
import { EmailForm } from "./components/EmailForm";
// import { Note } from "./components/Note";
// import noteService from "./services/notes"
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PickDate } from "./components/pickDate";
import { format } from "date-fns";

function App() {
  const [selected, setSelected] = useState();
  const [newAppoinment, setNewAppoinment] = useState({ email: "" });
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    agendaService.getAll().then((response) => {
      setAgenda(response);
    });
  }, []);

  const handlerChangeEmail = (e) => {
    const newObject = { ...newAppoinment, email: e.target.value };
    setNewAppoinment(newObject);
  };

  const addAppoinment = (hour) => () => {
    if (!newAppoinment.email) {
      return window.alert("empty email field");
    }
    
    const newObject = {
      date: format(selected, "yyyy/MM/dd"),
      startTime: hour,
      email: newAppoinment.email,
    };
    agendaService.create(newObject).then((response) => {
      setAgenda(response);
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            // disableNavigation
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EmailForm
            value={newAppoinment.email}
            handlerChange={handlerChangeEmail}
          />
          <PickDate
            date={selected}
            handlerPost={addAppoinment}
            day={selected ? format(selected, "yyyy/MM/dd") : null}
            agenda={agenda}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
