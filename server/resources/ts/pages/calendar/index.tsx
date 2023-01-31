import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const CalendarPage: React.VFC = () => {
    return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]} // 追加
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale='ja'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek listWeek', // 追加
        }}
        events={[
        { title: 'eventを', start: '2023-03-14' },
          {title:'event2', start: '2023-03-14'},
          {title:'こんな感じで追加できます', start: '2023-03-15', end: '2023-03-17'}
        ]}
      />
    </div>
    );
};

export default CalendarPage;