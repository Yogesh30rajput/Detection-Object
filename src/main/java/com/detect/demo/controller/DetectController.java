package com.detect.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("*")
public class DetectController {
	
	@PostMapping("/upload-image")
	  public void uploadImage(@RequestParam("image") MultipartFile image) {
		
		System.out.println("Imagae Received Successfully");
	    // Process the uploaded image here
	    // You can save it to a file, store it in a database, or perform any desired operations
	    // Example: image.transferTo(new File("path/to/save/image.jpg"));
	  }

	

}
