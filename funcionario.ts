namespace hospital{
    export class Funcionario extends Pessoa{
        private _codFuncionario:number;

        public getcodFuncionario(){
            this._codFuncionario;
        }

        public setcodFuncionario(codFuncionario:number):void{
            this._codFuncionario = codFuncionario;
        }
    }
}