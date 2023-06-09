package com.turismorapidobackend.turismorapidobackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
public class Atracao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_atracao")
    Long idAtracao;

    String name;

    Long tel_number;

    String endereco;

    String descricao;

    String tipo;

    Double longitude;

    Double latitude;

    @ManyToOne(targetEntity = Cidade.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "cidade_id")
    Cidade cidade;

    @ManyToMany(targetEntity = Roteiro.class, mappedBy = "atracoes")
    List<Roteiro> roteiros;
}
