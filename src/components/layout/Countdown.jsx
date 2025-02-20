import React, { useState, useEffect } from 'react';
import "../styles/countDown.css"

function Countdown() {
  const [countDownDate, setCountDownDate] = useState(new Date('Oct 12, 2024 22:00:00').getTime());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDownDate]);

  return (
    <div className="contenedor">
      <div className="contenido">
        <div className="contador">
          <div className="responsivo1">
            <div className="cartel">
              <div id="dias">{days}</div>
              <div className="h3"><h3>Días</h3></div>
            </div>
            <div className="cartel">
              <div id="horas">{hours}</div>
              <div className="h3"><h3>Horas</h3></div>
            </div>
          </div>
          <div className="responsivo2">
            <div className="cartel">
              <div id="minutos">{minutes}</div>
              <div className="h3"><h3>Minutos</h3></div>
            </div>
            <div className="cartel">
              <div id="segundos">{seconds}</div>
              <div className="h3"><h3>Segundos</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;