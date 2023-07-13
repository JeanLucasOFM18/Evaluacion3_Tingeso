package com.jeanrivera.repositorioservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "repositorios")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Repositorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String url;
    private String respuesta;
    private String nivel;
}
