package com.jeanrivera.repositorioservice.repository;

import com.jeanrivera.repositorioservice.entity.Repositorio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositorioRepository extends JpaRepository<Repositorio, Integer> {

    @Query(value = "SELECT p FROM Repositorio p WHERE p.nivel = :filtro")
    List<Repositorio> findByNivel(@Param("filtro") String filtro);
}
