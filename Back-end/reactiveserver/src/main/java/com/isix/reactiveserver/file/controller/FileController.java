package com.isix.reactiveserver.file.controller;

import com.isix.reactiveserver.exception.BusinessLogicException;
import com.isix.reactiveserver.exception.ExceptionCode;
import com.isix.reactiveserver.file.service.FileService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.client.RestTemplate;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;

    /*@Value("${app.savedimage.rootpath}")
    String folderRoot;*/

    @GetMapping("/image/{sessionId}")
    public ResponseEntity<String[]> getImageList(@PathVariable String sessionId){
        return new ResponseEntity<>(fileService.getImageList(sessionId),HttpStatus.OK);
    }

    @GetMapping("/image/{sessionId}/{name}")
    public void download(@PathVariable String name, @PathVariable String sessionId, HttpServletResponse response)throws Exception{

        byte[] fileBytes = fileService.getImage(sessionId,name);

        response.setHeader("Content-Disposition","attachment;filename=" + name);
        try(ByteArrayInputStream fileInputStream = new ByteArrayInputStream(fileBytes)){
            OutputStream out = response.getOutputStream();

            int read = 0;
            byte[] buffer = new byte[1024];
            while ((read = fileInputStream.read(buffer)) != -1) {
                out.write(buffer, 0, read);
            }

        }catch(Exception e){
            e.printStackTrace();
            throw new Exception("Download Error");
        }
    }


    /*@GetMapping("/image/{sessionId}")
    public ResponseEntity<String[]> getImageList(@PathVariable String sessionId){

        File directory = new File(folderRoot + File.separator + sessionId);
        String[] files = directory.list();

        return new ResponseEntity<>(files, HttpStatus.OK);
    }

    @GetMapping("/image/{sessionId}/{name}")
    public void download(@PathVariable String name, @PathVariable String sessionId, HttpServletResponse response)throws Exception{
        
        File imageDir = new File(folderRoot + File.separator + sessionId + File.separator + name );

        response.setHeader("Content-Disposition","attachment;filename=" + imageDir.getName());
        try(FileInputStream fileInputStream = new FileInputStream(imageDir)){
            OutputStream out = response.getOutputStream();

            int read = 0;
            byte[] buffer = new byte[1024];
            while ((read = fileInputStream.read(buffer)) != -1) {
                out.write(buffer, 0, read);
            }

        }catch(Exception e){
            e.printStackTrace();
            throw new Exception("Download Error");
        }
    }*/
}

