package com.turismorapidobackend.turismorapidobackend.model;

import java.time.LocalDate;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_client;
    String name;
    long cpf;
    LocalDate data_nascimento;
    Long tel_number;

    public Client(){
        
    }
    
}
