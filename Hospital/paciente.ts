///<reference path="pessoa.ts" />

namespace hospital{
    export class Paciente extends Pessoa{
        private _codPaciente:number;

        public getcodPaciente(){
            return this._codPaciente;
        }

        public setcodPaciente(codPaciente:number){
            this._codPaciente = codPaciente;
        }
    }
}