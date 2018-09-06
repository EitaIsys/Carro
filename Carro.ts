export class Carro{
    public gas : number;
    public gasMax : number;
    public pass : number;
    public passMax : number;
    public km : number;

    public constructor(){
        this.gas = 0;
        this.gasMax = 10;
        this.pass = 0;
        this.passMax = 2;
        this.km = 0;
    }
    public embarcar() : boolean{
        if (this.pass == this.passMax){
            return false;
        }
        else{
            this.pass+=1;
            return true;
        }
    }
    public desembarcar() : boolean{
        if (this.pass == 0){
            return false;
        }
        else{
            this.pass-=1;
            return true;
        }
    }
    public abastecer(gasolina : number) : void{
        if (this.gas + gasolina > this.gasMax){
            console.log("Tanque cheio");
        }
        else{
            this.gas += gasolina;
            console.log("Abastecido");
        }
    }
    public dirigir(distancia : number) : boolean{
        if(this.pass == 0){
            console.log("Nao ha ninguem no veiculo.")
            return false;
        }
        else{
            let poss: number = this.gas*10;
            if(poss >= distancia){
                this.gas -= distancia/10;
                this.km += distancia;
                console.log("Voce chegou ao seu destino!");
                return true
            }
            else{
                console.log("Nao ha gasolina suficiente.");
                return false
            }
        }
    }
    public show() : string {
        let texto : string = ("Passageiros no veiculo: " + this.pass + ", " + "combustivel: "
                                    + this.gas+ ", " + "Quilometragem: " + this.km + ".");
        return texto;        
    }
}
