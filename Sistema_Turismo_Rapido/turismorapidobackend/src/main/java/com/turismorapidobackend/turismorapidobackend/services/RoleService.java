package com.turismorapidobackend.turismorapidobackend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismorapidobackend.turismorapidobackend.dto.ClientResponseDTO;
import com.turismorapidobackend.turismorapidobackend.dto.RoleRequestDTO;
import com.turismorapidobackend.turismorapidobackend.model.Client;
import com.turismorapidobackend.turismorapidobackend.model.Role;
import com.turismorapidobackend.turismorapidobackend.repository.ClientRepository;

@Service
public class RoleService {

    @Autowired
    ClientRepository clientRepository;
    
    public ClientResponseDTO save(RoleRequestDTO roleRequestDTO){
        Optional<Client> optionalClient =
                clientRepository.findById(roleRequestDTO.getClient_id());

        List<Role> roles = new ArrayList<>();

        if(optionalClient.isEmpty()){
            throw new Error("Usuário não encontrado!");
        }

        return new ClientResponseDTO(clientRepository.save(optionalClient.get()));
    }
}
