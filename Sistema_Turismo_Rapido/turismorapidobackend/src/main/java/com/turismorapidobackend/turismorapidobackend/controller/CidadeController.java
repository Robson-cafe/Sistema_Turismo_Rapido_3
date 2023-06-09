package com.turismorapidobackend.turismorapidobackend.controller;

import com.turismorapidobackend.turismorapidobackend.dto.CidadeRequestDTO;
import com.turismorapidobackend.turismorapidobackend.services.CidadeService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/cidades")
public class CidadeController {
    @Autowired
    CidadeService cidadeService;

    @PostMapping
    public ResponseEntity<Object> save(
            @RequestBody @Valid CidadeRequestDTO cidadeRequestDTO){
        return cidadeService.save(cidadeRequestDTO);
    }

    @GetMapping(value= {"", "/", "/{id}"})
    public ResponseEntity<Object> find(
            @PathVariable(name = "id") Optional<Long> id,
            @RequestParam(value="name", required=false) Optional<String> name){
        return cidadeService.find(id, name);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@NonNull @PathVariable(name = "id") Optional<Long> id){
        return cidadeService.delete(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@NonNull @PathVariable(name = "id") Optional<Long> id, @RequestBody CidadeRequestDTO cidadeRequestDTO) {
        return cidadeService.update(id, cidadeRequestDTO);
    }
}
