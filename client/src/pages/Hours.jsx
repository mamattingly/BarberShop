function StoreHours() {
    const regularHours = [
      { day: 'SUNDAY', time: 'CLOSED' },
      { day: 'MONDAY', time: 'CLOSED' },
      { day: 'TUESDAY', time: '12:00 PM - 6:00 PM' },
      { day: 'WEDNESDAY', time: '9:00 AM - 7:30 PM' },
      { day: 'THURSDAY', time: '7:00 AM - 7:30 PM' },
      { day: 'FRIDAY', time: '8:00 AM - 4:00 PM' },
      { day: 'SATURDAY', time: '9:00 AM - 4:00 PM' },
    ];
  
    const holidaySchedule = [
      { holiday: "NEW YEAR'S EVE", time: '8:00 AM - 12:00 PM' },
      { holiday: "NEW YEAR'S DAY", time: 'CLOSED' },
      { holiday: 'JULY 4th', time: 'CLOSED' },
      { holiday: 'MEMORIAL DAY', time: 'CLOSED' },
      { holiday: 'LABOR DAY', time: 'CLOSED' },
      { holiday: 'THANKSGIVING DAY', time: 'CLOSED' },
      { holiday: 'CHRISTMAS EVE', time: 'CLOSED' },
      { holiday: 'CHRISTMAS DAY', time: 'CLOSED' },
    ];
  
    return (
      <div className="store-hours">
        <h1>The Elegant Edge Hours of Operation</h1>
        <ul>
          {regularHours.map((item, index) => (
            <li key={index}>
              <strong>{item.day}:</strong> {item.time}
            </li>
          ))}
        </ul>
  
        <h2>Holiday Schedule</h2>
        <ul>
          {holidaySchedule.map((item, index) => (
            <li key={index}>
              <strong>{item.holiday}:</strong> {item.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default StoreHours;