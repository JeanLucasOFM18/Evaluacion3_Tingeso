package com.jeanrivera.repositorioservice.service;

import com.jeanrivera.repositorioservice.entity.Repositorio;
import com.jeanrivera.repositorioservice.repository.RepositorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepositorioService{

    @Autowired
    private RepositorioRepository repositorioRepository;

    public List<Repositorio> listadoPreguntas() {
        return repositorioRepository.findAll();
    }

    public Repositorio crearPregunta(Repositorio repositorio) {
        return repositorioRepository.save(repositorio);
    }

    public Repositorio actualizarPregunta(Repositorio repositorio){
        return repositorioRepository.save(repositorio);
    }

    public void eliminarPregunta(Repositorio repositorio){
        repositorioRepository.delete(repositorio);
    }

    public List<Repositorio> obtenerPorNivel(String nivel) {
        return repositorioRepository.findByNivel(nivel);
    }

    /*
    public List<Proveedor> listadoProveedores() {
        return proveedorRepository.findAll();
    }

    public Proveedor crearProveedor(Proveedor proveedor) {
        return proveedorRepository.save(proveedor);
    }

    public Proveedor actualizarProveedor(Proveedor proveedor){
        return proveedorRepository.save(proveedor);
    }

    public void eliminarProveedor(Proveedor proveedor){
        proveedorRepository.delete(proveedor);
    }

    public boolean findByCodigo(String codigo) {
        Proveedor proveedor = proveedorRepository.findByCodigo(codigo);
        return proveedor != null;
    }

    public Proveedor obtenerPorCodigo(String codigo) {
        return proveedorRepository.findByCodigo(codigo);
    }*/
}
