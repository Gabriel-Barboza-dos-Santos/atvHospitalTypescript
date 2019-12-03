namespace hospital{
    export class Medico extends Funcionario{
        private _crm:number;
        private _especialidade:string;

        public getCrm(){
            this._crm;
        }

        public setCrm(crm:number):void{
            this._crm = crm;
        }

        public getEspecialidade(){
            this._especialidade;
        }

        public setEspecialidade(especialidade:string):void{
            this._especialidade = especialidade;
        }
    }
}