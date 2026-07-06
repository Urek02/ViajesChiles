document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });

      // Cerrar el menú hamburguesa si está abierto
      const menu = document.querySelector(".navbar-collapse");
      const bsCollapse = bootstrap.Collapse.getInstance(menu);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});
const btn_enviar = document.getElementById("btn-enviar")
btn_enviar.onclick = function(){
    alert("Contaco Enviado con exito")
}