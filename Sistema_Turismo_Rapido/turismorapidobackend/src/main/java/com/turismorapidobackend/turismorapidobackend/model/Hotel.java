package com.turismorapidobackend.turismorapidobackend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_hotel;
    
    String hotel_name;
    Long phone_number;
    String street_name;
    int street_number;
    String street_district;
    
    @OneToMany(targetEntity = Cidade.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "cidade_id")
    Cidade cidade;

    public Hotel(){

    }

}
