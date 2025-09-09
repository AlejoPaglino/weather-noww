async function getWeather() {
  // Coordenadas de Santa Rosa, La Pampa
  const lat = -36.62;
  const lon = -64.29;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const weather = data.current_weather;

    document.getElementById('temperature').textContent = weather.temperature;
    document.getElementById('wind').textContent = weather.windspeed;
    document.getElementById('time').textContent = new Date(weather.time).toLocaleString('es-AR');
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    alert("No se pudo obtener el clima. Intenta más tarde.");
  }
}

// Ejecutar al cargar la página
getWeather();