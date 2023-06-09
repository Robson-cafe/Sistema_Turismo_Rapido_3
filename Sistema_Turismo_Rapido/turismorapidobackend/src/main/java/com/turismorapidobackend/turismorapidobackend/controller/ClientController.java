package com.turismorapidobackend.turismorapidobackend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.http.ResponseEntity;

import org.springframework.lang.NonNull;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.turismorapidobackend.turismorapidobackend.dto.ClientRequestDTO;
import com.turismorapidobackend.turismorapidobackend.dto.ClientResponseDTO;
import com.turismorapidobackend.turismorapidobackend.dto.RoleRequestDTO;
import com.turismorapidobackend.turismorapidobackend.services.ClientService;
import com.turismorapidobackend.turismorapidobackend.services.RoleService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/clients")
public class ClientController {
    @Autowired
    ClientService clientService;

    @Autowired
    RoleService roleService;

    @GetMapping(value= {"", "/", "/{id}"})
    public ResponseEntity<Object> find(
            @PathVariable(name = "id", required=false) Long id,
            @RequestParam(value="name", required=false) Optional<String> name) {
        return clientService.find(id, name);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid ClientRequestDTO clientRequestDTO) {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        String username;

        if (principal instanceof UserDetails) {
            username = ((UserDetails)principal).getUsername();
        }
        
        return clientService.save(clientRequestDTO);
        
    }

    @PostMapping("/role")
    public ClientResponseDTO adicionarUserRole(@RequestBody RoleRequestDTO roleRequestDTO){
        return clientService.addRole(roleRequestDTO);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@NonNull @PathVariable(name = "id") Long id){
        return clientService.delete(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@NonNull @PathVariable(name = "id") Long id, @RequestBody ClientRequestDTO clientRequestDTO) {
        return clientService.update(id, clientRequestDTO);
    }
    
}
