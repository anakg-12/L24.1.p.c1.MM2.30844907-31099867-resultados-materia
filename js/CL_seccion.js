export default class CL_seccion{
    constructor(){
        this.contestu=0;
        this.contrepro=0;
        this.contapro=0;
        this.mayorn=0;
        this.cedulaMayor=0;
    }
    procesar(e){
        this.contestu++;
        if(e.notaf>= 48)
            this.contapro++;
        else
        this.contrepro++;
        if(e.notaf>this.mayorn){
            this.mayorn=e.notaf;
          this.cedulaMayor=e.cedula;
        }
    }
    
    porcentaje(){
        return (this.contapro*100)/this.contestu;
    }
    
}