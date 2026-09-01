const WHATSAPP = "51916901772";

document.querySelectorAll("#contacto").forEach((form) => {
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const datos = new FormData(evento.currentTarget);
    const texto = [
      `Hola, soy ${datos.get("nombre")}.`,
      `Teléfono: ${datos.get("telefono")}`,
      `Correo: ${datos.get("correo")}`,
      "",
      datos.get("mensaje"),
    ].join("\n");
    window.location.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  });
});
