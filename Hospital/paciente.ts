namespace hospital{
    export class Paciente extends Pessoa{
        private _codPaciente:number;

        public getcodPaciente(){
            this._codPaciente;
        }

        public setcodPaciente(codPaciente:number){
            this._codPaciente = codPaciente;
        }
    }
}