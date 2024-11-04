import { packagesArr } from "../assets/packages";
import { useState } from "react";

const Schedule = () => {
    const [appointments, setAppointments] = useState([]);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [selectedPackage, setSelectedPackage] = useState(packagesArr[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAppointment = { name, date, time, package: selectedPackage };
        setAppointments([...appointments, newAppointment]);
        setName("");
        setDate("");
        setTime("");
        setSelectedPackage(packagesArr[0]);
    };

    return (
        <div>
            <h1>Schedule a Visit</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Package:</label>
                    <select
                        value={selectedPackage}
                        onChange={(e) =>
                            setSelectedPackage(JSON.parse(e.target.value))
                        }
                        required
                    >
                        {packagesArr.map((pkg, index) => (
                            <option key={index} value={JSON.stringify(pkg)}>
                                {pkg.title}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Schedule</button>
            </form>
            <h2>Appointments</h2>
            <ul>
                {appointments.map((appointment, index) => (
                    <li key={index}>
                        {appointment.name} - {appointment.date} at{" "}
                        {appointment.time} ({appointment.package})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;
