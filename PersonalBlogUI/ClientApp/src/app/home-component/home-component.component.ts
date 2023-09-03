import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent {
profilePic:string = '';
name:string = '';
description:string = '';
ngOnInit(){
  this.getName();   
}


getName(){
  this.profilePic = 'https://media.licdn.com/dms/image/D4D03AQFP_uyOMX-sYw/profile-displayphoto-shrink_400_400/0/1693650435893?e=1698883200&v=beta&t=LNUf-x9Ejk_b8RxsjAS-IZF2VCWboRFRdGRip_f77K0';
  this.name = "Nayan Mistry";
  this.description = "A self-motivated person, believing in working hard to achieve greater goals." + 
                    // "\n Demonstrated relation building skill and successfully working with team members to achieve better " + 
                    // "outputs and h" + 
                    "\n Having experience of working in BFSI Domain, Automation Domain and Enterprise Domain.";
}


}
