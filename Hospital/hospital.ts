///<reference path="paciente.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="medico.ts"/>
namespace hospital{
    export class Hospital{
        public _nome:string;
        public _enfermeiros:Array<Enfermeiro>=[];
        public _medicos:Array<Medico>=[];
        public _pacientes:Array<Paciente>=[];

        public getNome(){
           return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;      
        }

        public getEnfermeiro(){
            return this._enfermeiros;
        }

        public addEnfermeiro(Enfermeiros:Enfermeiro){
            this._enfermeiros.push(Enfermeiros);      
        }

        public getMedicos(){
            return this._medicos;
        }

        public addMedicos(Medicos:Medico){
            this._medicos.push(Medicos);      
        }

        public getPacientes(){
            return this._pacientes;
        }

        public addPacientes(Pacientes:Paciente){
             this._pacientes.push(Pacientes);      
        }
    }
}