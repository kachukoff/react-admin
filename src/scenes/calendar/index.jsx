import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ruLocale from "@fullcalendar/core/locales/ru";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import { formatDate } from "@fullcalendar/core";

const Calendar = () => {
  const { t, i18n, ready } = useTranslation();
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt(t("calendar.prompt_title"));
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(t("calendar.confirm_delete", { title: selected.event.title }))) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="calendar.title" subtitle="calendar.subtitle" />

      {ready && (
        <Box display="flex" justifyContent="space-between">
          {/* CALENDAR SIDEBAR */}
          <Box
            flex="1 1 20%"
            backgroundColor="var(--primary-400)"
            p="15px"
            borderRadius="4px"
          >
            <Typography variant="h5">{t("calendar.events_sidebar")}</Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: event.color || "var(--green-accent-500)",
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          locale: i18n.language,
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* CALENDAR */}
          <Box flex="1 1 100%" ml="15px">
            <FullCalendar
              key={i18n.language}
              locale={i18n.language === "ru" ? ruLocale : undefined}
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                { id: "1", title: t("calendar.events.team_meeting"), date: "2026-10-12", color: "#4cceac" },
                { id: "2", title: t("calendar.events.project_kickoff"), date: "2026-10-15", color: "#6870fa" },
                { id: "3", title: t("calendar.events.client_call"), date: "2026-10-18", color: "#db4f4a" },
                { id: "4", title: t("calendar.events.code_review"), date: "2026-10-22", color: "#f59e0b" },
                { id: "5", title: t("calendar.events.release_day"), date: "2026-10-25", color: "#22c55e" },
                { id: "6", title: t("calendar.events.training"), date: "2026-10-28", color: "#8b5cf6" },
                { id: "7", title: t("calendar.events.sprint_planning"), date: "2026-11-02", color: "#06b6d4" },
                { id: "8", title: t("calendar.events.one_on_one"), date: "2026-11-05", color: "#ec4899" },
              ]}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Calendar;