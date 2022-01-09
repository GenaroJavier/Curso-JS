class Celular {
    constructor (modelo, color, peso, resolPantall, resolCamara, memRam) {
        this.modelo = modelo; 
        this.color = color;
        this.peso = peso;
        this.resolPantall = resolPantall;
        this.resolCamara = resolCamara;
        this.memRam = memRam; 
    }

    static Encender () {
        alert(`Encendiendo`); 
    }

    static Reiniciar () {
        alert(`Reiniciando`); 
    }

    static Apagar () {
        alert(`Apagando`);
    }

    static TomarFoto () {
        document.write(`<br><img src="https://images.unsplash.com/photo-1641611605871-ae20d4514b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">`); 
    }

    static TomarFoto () {
        alert('Grabando');
    }

    info () {
        document.write(`
        <br>
        <b>Modelo:</b> ${this.modelo} <br>
        <b>Color:</b> ${this.color} <br>
        <b>Peso:</b> ${this.peso} <br>
        <b>Resolución de pantalla:</b> ${this.resolPantall} <br>
        <b>Resolución de camara:</b> ${this.resolCamara} <br>
        <b>RAM:</b> ${this.memRam} <br>
        `); 
    }
}

const MotoG = new Celular('Moto G', 'Negro', '80g', '1200px X 720px', '1200px X 720px', '8 Gb');
const Samsung = new Celular('Note 9', 'Blanco', '110g', '3200px X 1200px', '1200px X 720px', '16 Gb');
const Huawei = new Celular('Huawei XL 3', 'Azul cielo', '120g', '1220px X 820px', '1300px X 900px', '32 Gb')

/*MotoG.info(); 
Samsung.info(); 
Huawei.info(); 
*/

class CelularAltaGama extends Celular{
    constructor(modelo, color, peso, resolPantall, resolCamara, memRam, resCamaraEx) {
        super(modelo, color, peso, resolPantall, resolCamara, memRam); 
        this.resCamaraEx = resCamaraEx; 
    }

    static GrabarCamaraLenta () {
        alert('Grabando en camara lenta'); 
    }

    static ReconocerRostro () {
        alert('Iniciando reconocimiento facial'); 
    }
    infoCelularAltaG () {
        this.info(); 
        document.write(`<b>Resolución Camara Extra:</b> ${this.resCamaraEx} <br>`); 
    }
}

const Iphone = new CelularAltaGama('Iphone 11', 'Dorado', '132gr', '2400px X 1200px', '2400px X 1500px', '6gb', '2400px X 1500px');
const GalaxyFold = new CelularAltaGama('Galaxy Fold 2', 'Negro', '124gr', '2030px X 1300px', '1200px X 1300px', '12gb', '2400px X 1500px');

Iphone.infoCelularAltaG(); 
GalaxyFold.infoCelularAltaG(); 