import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';

const CalendarPage: React.VFC = () => {
    return (
      <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}         // 追加
        locale='ja'                  // 追加
      />
    </div>
    );
};

export default CalendarPage;