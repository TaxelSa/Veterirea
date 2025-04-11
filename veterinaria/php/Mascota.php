<?php
class Mascota
{
  protected $nombre;  //private, public
  protected $raza;
  protected $costo;

  public function getCosto()
  {
    return $this->costo;
  }
 
  public function setCosto($costo)
  {
    $this->costo= $costo;
  }
 
  public function getNombre()
  {
    return $this->nombre;
  }
 
  public function setNombre($nombre)
  {
    $this->nombre = $nombre;
  }
 
 public function getRaza()
  {
    return $this->raza;   //this.raza
  }
 
  public function setRaza($raza)
  {
    $this->raza = $raza;
  }
 
  
  protected function toString()
  {
    return "Esta mascota {$this->nombre} es {$this->raza} .";
  }

  function setFoto($valor){
    $this->sFoto = $valor;
  }

  function getFoto(){
    return $this->sFoto;
  }
  
  function __construct($sNom, $nCosto, $sRaza, $sFot){
    $this->nombre = $sNom;
    $this->costo = $nCosto;
    $this->raza = $sRaza;
    $this->sFoto = $sFot;
  }
}
?>