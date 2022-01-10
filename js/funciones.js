class Aplicacion {
     constructor (numDescargas, puntuacion, peso) {
        this.numDescargas = numDescargas; 
        this.puntuacion = puntuacion; 
        this.peso = peso;
        this.Instalacion = false;
        this.Ejecucion = false; 
     }

    Instalar () {
         if (this.Instalacion == false) {
             this.Instalacion = true; 
             alert('Instalando aplicación');
         } else alert('Aplicación instalada');
     }

    Abrir () {
        if (this.Ejecucion == false && this.Instalacion == true) {
            this.Ejecucion = true; 
            alert('Abriendo aplicación');
        } else this.Instalacion == false ? alert('Esta aplicación no esta instalada') : 
        alert('Abriendo aplicación');
    }

    Cerrar () {
        if (this.Ejecucion == true) {
            this.Ejecucion = false; 
            alert('Cerrando aplicación');
        } else alert('Esta aplicación no se esta ejecutando');
    }

    Desinstalar () {
        if (this.Instalacion == true) {
            this.Instalacion = false; 
            alert('Desinstalando aplicación');
        } else alert('Esta aplicación no esta instalada en el dispositivo');
    }

    appInfo() {
        document.write(`
        <br>
        <b>Numero de descargas:</b> ${this.numDescargas} <br>
        <b>Puntuación:</b> ${this.puntuacion} <br>
        <b>Peso:</b> ${this.peso} <br>
        `); 
    }
}

const verApps = () => {
    let numApps = parseInt(prompt('Cuantas apps deseas ver?')); 
    for (let aplicación = 0; aplicación <=numApps; aplicación++) {
        const app = new Aplicacion(
            Math.floor(Math.random() * (2000 - 1) + 1),
            Math.floor(Math.random() * (5 - 1) + 1), 
            `${Math.floor((Math.random() * (1000 - 40) + 40))}mb`);
        app.appInfo();
    }
}

const Aplicacion1 = new Aplicacion ('3212', '4', '1200mb'); 