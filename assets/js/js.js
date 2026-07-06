document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const btn_enviar = document.getElementById("btn-enviar")
btn_enviar.onclick = function(){
    alert("Contaco Enviado con exito")
}