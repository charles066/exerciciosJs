class ContaBancaria {
    constructor (agencia, numero, tipo, saldo){
       this.agencia = agencia;  
       this.numero = numero;
       this.tipo = tipo;
       this._saldo = 0; 
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor
    }
     
    sacar (valor){
      if (valor > this._saldo) {
          return 'Operaçâo Negada';
      }
      this._saldo = this.saldo - valor;
   
      return this._saldo;
    }
    
    depositar(valor) {
        this._saldo = this.saldo + valor;
   
      return this._saldo;
    }
}

    class ContaCorrente extends ContaBancaria{
        constructor (agencia, numero, cartaoCredito, saldo){
            super  (agencia, numero, saldo);
             this.tipo = 'corrente';
             this.cartaoCredito = cartaoCredito;
        }
        
        get cartaoCredito (){
            return this._cartaoCredito;
        }

        set cartaoCredito(valor){
            this._cartaoCredito = valor;
        }
    } 
    
    class Contapoupança extends ContaBancaria{
        constructor (agencia, numero, saldo) {
             super(agencia, numero, saldo);
             this.tipo = 'poupança';
        }
    }   
    class ContaUniversitaria extends ContaBancaria {
        constructor (agencia, numero, saldo) {
             super(agencia, numero, saldo);
             this.tipo = 'universitaria';
        }
        sacar (valor){
            if (valor > 500) {
                return 'Operaçâo Negada';
            }
           
            this._saldo = this.saldo - valor;
         
            return this._saldo;
        }
    }  