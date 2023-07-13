package com.jeanrivera.repositorioservice.controller;

import com.jeanrivera.repositorioservice.entity.Repositorio;
import com.jeanrivera.repositorioservice.service.RepositorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

//@Controller
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

    /*
    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/registro")
    public String registro(){
        return "registro";
    }

    @GetMapping("/listado")
    public ResponseEntity<List<Proveedor>> mostrarUsuarios() {
        List<Proveedor> proveedores = proveedorServices.listadoProveedores();
        if(proveedores.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(proveedores);
    }

    @GetMapping("/obtenerPorCodigo/{codigo}")
    public ResponseEntity<Proveedor> obtenerPorCodigo(@PathVariable("codigo") String codigo) {
        Proveedor proveedor = proveedorServices.obtenerPorCodigo(codigo);
        return ResponseEntity.ok(proveedor);
    }

    @PostMapping("/crear")
    public String crearProveedor(@RequestBody Proveedor proveedor){
        if(proveedorServices.findByCodigo(proveedor.getCodigo())){
            return "Ya esta registrado este codigo";
        }
        else {
            Proveedor proveedornew = proveedorServices.crearProveedor(proveedor);
            if(proveedornew!=null){
                return "Registro Exitoso";
            }
            else {
                return "Registro Fallido";
            }
        }
    }

    /*
    @PostMapping("/crearProveedor")
    public String crearProveedor(@ModelAttribute Proveedor proveedor, RedirectAttributes redirectAttributes){
        if(proveedorServices.findByCodigo(proveedor.getCodigo())){
            redirectAttributes.addFlashAttribute("mensaje", "Ya esta registrado este codigo");
        }
        else {
            Proveedor proveedornew = proveedorServices.crearProveedor(proveedor);
            if(proveedornew!=null){
                redirectAttributes.addFlashAttribute("mensaje", "Registro Exitoso");
            }
            else {
                System.out.println("Registro Fallido");
            }
        }
        return "redirect:/registro";
    }

    @GetMapping("/proveedores")
    public String mostrarUsuarios(Model model) {
        List<Proveedor> proveedores = proveedorServices.listadoProveedores();
        model.addAttribute("proveedores", proveedores);
        return "proveedores";
    }*/

}