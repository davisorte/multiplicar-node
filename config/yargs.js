//optimizar los comnados
const opt ={

    base: {
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}
const argv=require('yargs')//comando obligatorio
.command('listar','Imprime en consola la tabla de multiplicar',opt)
.command('crear','Genera un archivo con la tabla de multiplicar',opt)
.help()
.argv
module.exports={
    argv
}