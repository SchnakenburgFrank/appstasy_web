import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactGroup: FormGroup = new FormGroup({});
  formInvalid = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private navService: NavService
  ) {
    this.buildContactForm();
  }

  ngOnInit(): void {
    this.navService.currentSection.next('contact');
    this.contactGroup.statusChanges.subscribe(
      (value) => (this.formInvalid = !value)
    );
    this.navService.changeForContact.next(true);
  }

  private buildContactForm(): void {
    this.contactGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      company: new FormControl(''),
      message: new FormControl('', Validators.required),
      consent: new FormControl('', Validators.required),
    });
  }

  sendRequest(): void {
    if (this.contactGroup.valid) {
      // contains the email address of staff member if contact page is called via "kontaktieren"-button
      // of said staff member. Can be used to orchestrate mails that get sent from contact form.
      // const staffMail = this.navService.contactMail;

      const request = this.contactGroup.value;
      // TODO add logic for sending mail with contents of request
      // sendEmail(request)
      this.formInvalid = false;
      this.navService.setContactMail(undefined);
    } else {
      this.formInvalid = true;
      this.validateAllFormFields(this.contactGroup);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((control) => {
      const currentFormcontrol = formGroup.get(control);
      if (currentFormcontrol instanceof FormControl) {
        currentFormcontrol.markAsTouched({ onlySelf: true });
      } else if (currentFormcontrol instanceof FormGroup) {
        this.validateAllFormFields(currentFormcontrol);
      }
    });
  }
}
