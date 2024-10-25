class heroi{
    constructor(nome, xp){
        this.nome = nome;
        this.xp = xp;
    }
    calculaNivel(){
        if(this.xp < 1000){
            console.log(`O heroi de nome ${this.nome} está no nivel Ferro`)
        }else if(this.xp>1000 && this.xp <= 2000){
            console.log(`O heroi de nome ${this.nome} está no nivel Bronze`)
        }else if(this.xp >2000 && this.xp <= 5000){
            console.log(`O heroi de nome ${this.nome} está no nivel Prata`)
        }else if(this.xp >5000 && this.xp <= 7000){
            console.log(`O heroi de nome ${this.nome} está no nivel Ouro`)
        }else if(this.xp>7000 && this.xp <=8000){
            console.log(`O heroi de nome ${this.nome} está no nivel Platina`)
        }else if(this.xp>8000 && this.xp <= 9000){
            console.log(`O heroi de nome ${this.nome} está no nivel Ascendente`)
        }else if(this.xp>9000 && this.xp <=10000){
            console.log(`O heroi de nome ${this.nome} está no nivel Imortal`)
        }else if(this.xp>10000){
            console.log(`O heroi de nome ${this.nome} está no nivel Radiante`)
        }
    }
}
new heroi('Ruan',6540).calculaNivel();