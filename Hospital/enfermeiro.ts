namespace hospital{
    export class Enfermeiro extends Funcionario{
        public _coren:number;

        public getCoren(){
                this._coren;
        }

        public setCoren(coren:number):void{
            this._coren = coren;
        }
    }
}