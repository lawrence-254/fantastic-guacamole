import React, { useState } from "react";
import "./sportsWidget.css";

import vs from "../../../assets/Home/sportsWidget/VS.svg";

const CalendarComponent = ({ fixtureDetails }) => {
  const { fixtureDates, month, year } = fixtureDetails;
  const [datesWithImages] = useState(fixtureDates);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const renderCalendar = () => {
    const calendar = [];
    let day = 1;
    let nextMonthDay = 1;
    let currentDate =
      firstDayOfMonth === 0
        ? prevMonthDays - 6
        : prevMonthDays - firstDayOfMonth + 1;
    let isCurrentMonth = false;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          const prevMonth = month === 0 ? 11 : month - 1;
          const prevYear = month === 0 ? year - 1 : year;
          const imageSrc = datesWithImages[prevMonth]?.[currentDate];
          week.push(
            <div
              key={`prev-${currentDate}`}
              className="calenderBodyDate bordering-date"
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={`Fixture for ${currentDate}`}
                  className="fixture-logo"
                />
              ) : (
                currentDate
              )}
            </div>
          );
          currentDate++;
        } else if (day > daysInMonth) {
          const nextMonth = month === 11 ? 0 : month + 1;
          const nextYear = month === 11 ? year + 1 : year;
          const imageSrc = datesWithImages[nextMonth]?.[nextMonthDay];
          week.push(
            <div
              key={`next-${nextMonthDay}`}
              className="calenderBodyDate bordering-date"
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={`Fixture for ${nextMonthDay}`}
                  className="fixture-logo"
                />
              ) : (
                nextMonthDay
              )}
            </div>
          );
          nextMonthDay++;
        } else {
          isCurrentMonth = true;
          const date = day;
          const imageSrc = datesWithImages[month]?.[date];
          week.push(
            <div key={`date-${date}`} className="calenderBodyDate">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={`Fixture for ${date}`}
                  className="fixture-logo"
                />
              ) : (
                date
              )}
            </div>
          );
          day++;
        }
        if (currentDate > prevMonthDays && !isCurrentMonth) {
          currentDate = 1;
        }
      }
      if (
        isCurrentMonth ||
        week.some((cell) => cell.props.children.type === "img")
      ) {
        calendar.push(
          <div key={`week-${i}`} className="calenderBodyDateRow">
            {week}
          </div>
        );
      }
    }
    return calendar;
  };

  return (
    <div className="calenderContainer">
      <div className="calenderHeader">
        {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
        {year}
      </div>
      <div className="calenderBody">
        <div className="calenderBodyTitle">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="calenderBodyDay">
              {day}
            </div>
          ))}
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
};

const ClubRowComponent = ({ club }) => {
  return (
    <div className="clubRowContainer">
      <div className="clubLeftRow">
        <span className="clubRowRank">{club.rank}.</span>
        <span className="clubRowLogo">
          <img src={club.logo} alt={`${club.team} Logo`} className="clubLogo" />
        </span>
        <span className="clubRowTeam">{club.team}</span>
      </div>
      <div className="clubInfo">
        <span className="clubRowGP">{club.gp}</span>
        <span className="clubRowW">{club.w}</span>
        <span className="clubRowD">{club.d}</span>
        <span className="clubRowL">{club.l}</span>
        <span className="clubRowF">{club.f}</span>
        <span className="clubRowA">{club.a}</span>
        <span className="clubRowGD">{club.gd}</span>
        <span className="clubRowPoints">{club.points}</span>
      </div>
    </div>
  );
};
const TableComponent = ({ clubsStandingsTable }) => {
  const [teamsData] = useState(clubsStandingsTable);

  return (
    <div className="tableContainer">
      <div className="tableHeader">
        <div className="tableHeaderTitle">Club</div>
        <div className="tableHeaderButton">
          <span>GP</span>
          <span>W</span>
          <span>D</span>
          <span>L</span>
          <span>F</span>
          <span>A</span>
          <span>GD</span>
          <span>Pts</span>
        </div>
      </div>
      <div className="tableBody">
        {[...teamsData]
          .sort((a, b) => a.rank - b.rank)
          .map((team) => (
            <ClubRowComponent key={team.rank} club={team} />
          ))}
      </div>
    </div>
  );
};

const FixtureComponent = ({ focusFixture }) => {
  const {
    round,
    HomeTeamCrest,
    AwayTeamCrest,
    fixtureDate,
    homeTeam,
    homeTeamScore,
    awayTeamScore,
    awayTeam,
  } = focusFixture;
  return (
    <div className="fixtureContainer">
      <div className="fixtureHeaderTitle">{round}</div>
      <div className="fixtureBody">
        <div className="fixtureRow">
          <span className="fixtureRowTeam">
            <img
              style={{ width: "100px", height: "100px" }}
              src={HomeTeamCrest}
            />
          </span>
          <span className="fixtureRowVs">
            <img
              style={{ width: "50px", height: "50px", marginTop: "0" }}
              src={vs}
            />
          </span>
          <span className="fixtureRow">
            <img
              style={{ width: "100px", height: "100px" }}
              src={AwayTeamCrest}
            />
          </span>
        </div>
        <p>{fixtureDate}</p>
      </div>
      <div className="fixtureFooter">
        <div className="homeTeam">{homeTeam}</div>
        <div className="scoreContainer">
          <div className="score">{homeTeamScore}</div>
          <div className="score">{awayTeamScore}</div>
        </div>
        <div className="awayTeam">{awayTeam}</div>
      </div>
    </div>
  );
};
function SportsWidget({ fixturesCalender, clubsStandingsTable, focusFixture }) {
  return (
    <div className="sportsWidgetContainer">
      <CalendarComponent fixtureDetails={fixturesCalender} />
      <TableComponent clubsStandingsTable={clubsStandingsTable} />
      <FixtureComponent focusFixture={focusFixture} />
    </div>
  );
}

export default SportsWidget;
