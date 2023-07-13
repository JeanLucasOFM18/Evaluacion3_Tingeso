package com.jeanrivera.repositorioservice.controller;

import com.jeanrivera.repositorioservice.entity.Repositorio;
import com.jeanrivera.repositorioservice.service.RepositorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/repositorio")
public class RepositorioController {

    @Autowired
    private RepositorioService repositorioService;

    @GetMapping("/listado")
    public ResponseEntity<List<Repositorio>> mostrarPreguntas() {
        List<Repositorio> repositorios = repositorioService.listadoPreguntas();
        if(repositorios.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(repositorios);
    }

    @GetMapping("/obtenerPorNivel/{nivel}")
    public ResponseEntity<List<Repositorio>> obtenerPorNivel(@PathVariable("nivel") String nivel) {
        List<Repositorio> repositorios = repositorioService.obtenerPorNivel(nivel);
        if(repositorios.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(repositorios);
    }

    @PostMapping("/crearPregunta")
    public String crearPregunta(@RequestBody Repositorio repositorio){
        Repositorio repositorionew = repositorioService.crearPregunta(repositorio);
        if(repositorionew!=null){
            return "Registro Exitoso";
        }
        else {
            return "Registro Fallido";
        }
    }
}