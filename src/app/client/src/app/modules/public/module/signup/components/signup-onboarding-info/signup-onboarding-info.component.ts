import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResourceService, ToasterService } from '@sunbird/shared';

@Component({
  selector: 'app-signup-onboarding-info',
  templateUrl: './signup-onboarding-info.component.html',
  styleUrls: ['./signup-onboarding-info.component.scss' , '../signup/signup_form.component.scss']
})
export class SignupOnboardingInfoComponent implements OnInit {

  @Input() startingForm: object;
  @Output() subformInitialized: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() triggerNext: EventEmitter<boolean> = new EventEmitter<boolean>();
  showEditUserDetailsPopup = false;
  showFullScreenLoader = false;
  constructor(public resourceService: ResourceService, public toasterService: ToasterService) { }

  ngOnInit(): void {
    console.log('Global Object data => ', this.startingForm); // TODO: log!
    setTimeout(() => {
      this.sbformDOMManipulation();
    }, 500);
  }

  sbformDOMManipulation() {
    let formElement = document.getElementsByTagName('sb-form')[0];
    if (formElement) {
      let roleElement = formElement.getElementsByClassName('ng-star-inserted')[0];
      if (roleElement) {
        roleElement.classList.add('hide');
      }
    }
  }
  onRegisterSubmit(event) {
    this.subformInitialized.emit(event);
    this.triggerNext.emit();
  }
}
