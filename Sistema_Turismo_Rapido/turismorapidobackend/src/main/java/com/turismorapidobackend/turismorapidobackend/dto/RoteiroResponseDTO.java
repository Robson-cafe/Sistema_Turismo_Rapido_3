package com.turismorapidobackend.turismorapidobackend.dto;

import com.turismorapidobackend.turismorapidobackend.model.Client;
import com.turismorapidobackend.turismorapidobackend.model.Roteiro;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class RoteiroResponseDTO {
    Long idRoteiro;
    CidadeResponseDTO cidade;
    List<AtracaoResponseDTO> atracoes;
    List<AlimentacaoResponseDTO> alimentacoes;
    List<HotelResponseDTO> hotels;
    List<ClientResponseDTO> clients;
    Double valor;
    String description;
    String name;
    Long days;

    public RoteiroResponseDTO(Roteiro roteiro){
        this.idRoteiro = roteiro.getIdRoteiro();
        this.hotels = roteiro.getHoteis().stream().map(hotel -> new HotelResponseDTO(hotel)).toList();
        this.atracoes = roteiro.getAtracoes().stream().map(atracao -> new AtracaoResponseDTO(atracao)).toList();
        this.alimentacoes = roteiro.getAlimentacao().stream().map(alimentacao -> new AlimentacaoResponseDTO(alimentacao)).toList();
        this.clients = roteiro.getClients().stream().map(client -> new ClientResponseDTO(client)).toList();
        this.cidade = new CidadeResponseDTO(roteiro.getCidade());
        this.valor = roteiro.getValor();
        this.name = roteiro.getName();
        this.days = roteiro.getDays();
        this.description = roteiro.getDescription();
    }
}
