document.getElementById('sedeSelect').addEventListener('change', function () {
    var sedeInfo = {
        sede1: `<h4>Sede 1</h4>
                <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad</p>
                <p><strong>Teléfono:</strong> (555) 123-4567</p>
                <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                <p><strong>Encargado:</strong> Juan Pérez</p>`,
        sede2: `<h4>Sede 2</h4>
                <p><strong>Dirección:</strong> Avenida Ficticia 456, Ciudad</p>
                <p><strong>Teléfono:</strong> (555) 234-5678</p>
                <p><strong>Horario:</strong> Lunes a Viernes, 10:00 AM - 5:00 PM</p>
                <p><strong>Encargado:</strong> María López</p>`,
        sede3: `<h4>Sede 3</h4>
                <p><strong>Dirección:</strong> Plaza Modelo 789, Ciudad</p>
                <p><strong>Teléfono:</strong> (555) 345-6789</p>
                <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 7:00 PM</p>
                <p><strong>Encargado:</strong> Pedro Gómez</p>`
    };

    var selectedSede = this.value;
    var description = this.options[this.selectedIndex].dataset.description;
    var infoHtml = sedeInfo[selectedSede] || '';

    if (description) {
        infoHtml = `<p><strong>Descripción:</strong> ${description}</p>` + infoHtml;
    }

    document.getElementById('sedeInfo').innerHTML = infoHtml;
});