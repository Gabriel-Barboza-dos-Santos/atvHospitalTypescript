namespace hospital{
    export class Hospital{
        public _nome:string;
        public _enfermeiros:Array<Enfermeiro>=[];
        public _medicos:Array<Medico>=[];
        public _pacientes:Array<Paciente>=[];

        public getNome(){
            this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;      
        }

        public getEnfermeiro(){
            this._enfermeiros;
        }

        public addEnfermeiro(Enfermeiros:Enfermeiro){
            this._enfermeiros.push(Enfermeiros);      
        }

        public getMedicos(){
            this._pacientes;
        }

        public addMedicos(Medicos:Medico){
            this._medicos.push(Medicos);      
        }

        public getPacientes(){
            this._pacientes;
        }

        public addPacientes(Medicos:Medico){
            this._medicos.push(Medicos);      
        }
    }
}