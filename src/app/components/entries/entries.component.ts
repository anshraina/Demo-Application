import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {


  ngOnInit(): void {
  }

  closeModal: string = "";
  
  constructor(private modalService: NgbModal, private fb:FormBuilder) {}
    

  profileForm:any = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(255)]],
    prn: ['71842221L', [Validators.required, Validators.minLength(9),Validators.maxLength(9)]],
    
  })

  onSubmit(){
    console.log("Submit button is working")
    console.log(this.profileForm.value)
  }







  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
