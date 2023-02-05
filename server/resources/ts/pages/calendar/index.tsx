import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

interface myEventsType {
    title: string;
    start: string;
    color: string;
}

const CalendarPage: React.VFC = () => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputStart, setInputStart] = useState("");
    const [color, setColor] = useState("#3f51b5");
    const [myEvents, setMyEvents] = useState<myEventsType[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<myEventsType | null>(
        null
    );

    const handleDateClick = (arg: any) => {
      const event = myEvents.find(
          (e: myEventsType) => e.start === arg.dateStr
      );
  
      if (event) {
          setSelectedEvent(event);
          setInputTitle(event.title);
          setInputStart(event.start);
          setColor(event.color);
          setIsEditing(true);
      } else {
          setInputStart(arg.dateStr);
      }
      setShowModal(true);
  };
  
  const handleInputTitle = (e: any) => {
      setInputTitle(e.target.value);
  };
  
  const handleColor = (e: any) => {
      setColor(e.target.value);
  };
  
  const handleSubmit = () => {
      if (isEditing) {
          const newEvents = myEvents.map((e: myEventsType) => {
              if (e === selectedEvent) {
                  return { title: inputTitle, start: inputStart, color };
              }
              return e;
          });
          setMyEvents(newEvents);
          setSelectedEvent(null);
          setIsEditing(false);
      } else {
          setMyEvents([
              ...myEvents,
              { title: inputTitle, start: inputStart, color },
          ]);
      }
      setShowModal(false);
      setInputTitle("");
      setInputStart("");
      setColor("#3f51b5");
  };
  
  const handleDelete = () => {
      if (isEditing) {
          const newEvents = myEvents.filter(
              (e: myEventsType) => e !== selectedEvent
          );
          setMyEvents(newEvents);
          setSelectedEvent(null);
          setIsEditing(false);
      }
      setShowModal(false);
      setInputTitle("");
      setInputStart("");
      setColor("#3f51b5");
  };

  return (
    <div>
        {showModal && (
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1000,
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        position: "fixed",
                        top: "30%",
                        left: "40%",
                        width: "400px",
                        height: "300px",
                        zIndex: 2000,
                    }}
                >
                    <h2>テキストエリア</h2>
                    <textarea
                        value={inputTitle}
                        onChange={handleInputTitle}
                    ></textarea>
                    <select onChange={handleColor}>
                        <option value="#3f51b5">青</option>
                        <option value="#ff5722">オレンジ</option>
                        <option value="#4caf50">緑</option>
                        <option value="#e91e63">ピンク</option>
                    </select>
                    {isEditing && (
                        <button onClick={handleDelete}>削除</button>
                    )}
                    <button onClick={handleSubmit}>登録</button>
                    <button onClick={() => setShowModal(false)}>
                        キャンセル
                    </button>
                </div>
            </div>
        )}
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            events={myEvents}
            dateClick={handleDateClick}
        />
    </div>
);
};
export default CalendarPage;
