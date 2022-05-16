import { Button, ListGroup, Stack } from "react-bootstrap";

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

export const PickDate = ({ date, handlerPost, day, agenda }) => {
  if (!date) return <h2>Choose a date in the calendar.</h2>;

  const occupiedList = agenda
    .filter((appo) => appo.date === day)
    .map((appo) => appo.startTime);

  return (
    <>
      <ListGroup>
        {range(9, 17)
          .filter((hour) => !occupiedList.includes(hour))
          .map((hour) => {
            return (
              <ListGroup.Item key={hour} variant="primary">
                <h2>{hour < 10 ? `0${hour}:00` : `${hour}:00`}</h2>
                <Stack direction="horizontal" gap={3}>
                  <Button onClick={handlerPost(hour)}>Schedule</Button>
                </Stack>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </>
  );
};

const exportedObject = { PickDate };

export default exportedObject;
