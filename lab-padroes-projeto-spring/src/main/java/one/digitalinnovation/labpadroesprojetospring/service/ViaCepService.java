package one.digitalinnovation.labpadroesprojetospring.service;


import one.digitalinnovation.labpadroesprojetospring.model.Endereco;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



/*Client HTTP criado cia OpenFieng para consumo da API do viacep  */


@FeignClient(name = "viacep", url = "https://viacep.com.br/ws")
public interface ViaCepService {

//    @RequestMapping(method = RequestMethod.GET, value = "/{cep}/json/")
//    Endereco consultarCep(@PathVariable("cep") String cep);

    @GetMapping("/{cep}/json/")
    Endereco consultarCep(@PathVariable("cep") String cep);
}
