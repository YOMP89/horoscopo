document.getElementById('horoscope-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const birthdate = new Date(document.getElementById('birthdate').value);
    const month = birthdate.getUTCMonth() + 1;
    const day = birthdate.getUTCDate();
    
    const horoscope = getHoroscope(month, day);
    
    document.getElementById('result').innerHTML = `
        <h2>${horoscope.name}</h2>
        <img src="${horoscope.image}" alt="${horoscope.name}">
        <p>${horoscope.description}</p>
    `;
});

function getHoroscope(month, day) {
    const signs = [
        { name: "Aries", image: "https://example.com/aries.jpg", description: "Eres una persona valiente y decidida.", start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
        { name: "Tauro", image: "https://example.com/tauro.jpg", description: "Eres confiable y paciente.", start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
        { name: "Géminis", image: "https://example.com/geminis.jpg", description: "Eres adaptable y comunicativo.", start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
        { name: "Cáncer", image: "https://example.com/cancer.jpg", description: "Eres una persona emocional y protectora.", start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
        { name: "Leo", image: "https://example.com/leo.jpg", description: "Eres una persona apasionada y creativa.", start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
        { name: "Virgo", image: "https://example.com/virgo.jpg", description: "Eres práctico y detallista.", start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
        { name: "Libra", image: "https://example.com/libra.jpg", description: "Eres sociable y equilibrado.", start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
        { name: "Escorpio", image: "https://example.com/escorpio.jpg", description: "Eres apasionado y valiente.", start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
        { name: "Sagitario", image: "https://example.com/sagitario.jpg", description: "Eres optimista y honesto.", start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
        { name: "Capricornio", image: "https://example.com/capricornio.jpg", description: "Eres disciplinado y responsable.", start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
        { name: "Acuario", image: "https://example.com/acuario.jpg", description: "Eres independiente e innovador.", start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
        { name: "Piscis", image: "https://example.com/piscis.jpg", description: "Eres compasivo e intuitivo.", start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
    ];
    
    return signs.find(sign => 
        (month === sign.start.month && day >= sign.start.day) || 
        (month === sign.end.month && day <= sign.end.day) ||
        (month > sign.start.month && month < sign.end.month)
    ) || { name: "Desconocido", image: "", description: "No se encontró un signo correspondiente." };
}
