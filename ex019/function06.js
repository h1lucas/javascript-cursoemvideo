let amigo = {
    nome:'José',
    idade: 29,
    sexo: 'M',
    peso:85.4,
    engordaremagrecer(p=0){
        if(p>0){
        console.log('engordou')
        this.peso += p
    }
    }    
    }

amigo.engordaremagrecer(78)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)