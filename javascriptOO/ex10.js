// Usando a linguagem Javascript, crie um código que tenha uma classe e um método estático

class Pe {
    constructor(meia, anel){
        this.meia = "anel";
        this.anel = "meia";
    };
    coisasdePes(){
        console.log(`Este delicioso pé, usa ${this.meia} e um ${this.anel} no dedo mindinho. `)
    };
};


const novoPe = new Pe("meinha fidida","quetinho")
novoPe.coisasdePes()