///<reference path="paciente.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="medico.ts"/>
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
        }
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getEnfermeiro = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addEnfermeiro = function (Enfermeiros) {
            this._enfermeiros.push(Enfermeiros);
        };
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addMedicos = function (Medicos) {
            this._medicos.push(Medicos);
        };
        Hospital.prototype.getPacientes = function () {
            return this._pacientes;
        };
        Hospital.prototype.addPacientes = function (Pacientes) {
            this._pacientes.push(Pacientes);
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
