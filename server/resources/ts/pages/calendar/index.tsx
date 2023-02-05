import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

interface myEventsType {
  title: string;
  start: string;
  color: string;
}

const CalendarPage: React.VFC = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputStart, setInputStart] = useState('');
  const [color, setColor] = useState('#3f51b5');
  const [myEvents, setMyEvents] = useState<myEventsType[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = (arg: any) => {
    setInputStart(arg.dateStr);
    setShowModal(true);
  };

  const handleInputTitle = (e: any) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
    setMyEvents([...myEvents, { title: inputTitle, start: inputStart, color }]);
    setShowModal(false);
    setInputTitle('');
    setInputStart('');
  };

  return (
    <div>
      {showModal && (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }}>
          <div style={{ backgroundColor: 'white', position: 'fixed', top: '30%', left: '40%', width: '400px', height: '300px', zIndex: 2000 }}>
            <h2>テキストエリア</h2>
            <textarea value={inputTitle} onChange={handleInputTitle}></textarea>
            <button onClick={handleSubmit}>登録</button>
            <button onClick={() => setShowModal(false)}>キャンセル</button>
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